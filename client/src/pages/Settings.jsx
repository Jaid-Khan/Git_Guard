import { useCallback } from "react";
import { useParams } from "react-router-dom";

import useApi from "../hooks/useApi";

import {
  getSettings,
  updateSettings,
} from "../services/api";

import SettingsForm from "../components/SettingsForm";

const Settings = () => {
  const { repoName } = useParams();

  const fetchSettings = useCallback(
    () => getSettings(repoName),
    [repoName]
  );

  const { data, loading } =
    useApi(fetchSettings);

  const handleSave = async (
    updatedSettings
  ) => {
    try {
      await updateSettings(
        repoName,
        updatedSettings
      );

      alert("Settings Saved");
    } catch (error) {
      console.error(error);

      alert(
        "Failed to Save Settings"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="bg-white border rounded-2xl px-8 py-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

            <span className="font-medium text-gray-600">
              Loading Repository Settings...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">
        <div className="flex flex-col gap-3">
          <span className="w-fit px-3 py-1 rounded-full bg-white/20 text-sm">
            GitGuard AI
          </span>

          <h1 className="text-4xl font-bold">
            Repository Settings
          </h1>

          <p className="text-blue-100 max-w-2xl">
            Configure AI review behavior, repository preferences,
            severity filtering, and automation settings for
            {repoName && (
              <span className="font-semibold">
                {" "}
                {repoName}
              </span>
            )}
            .
          </p>
        </div>
      </div>

      {/* Settings Card */}
      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="border-b px-6 py-5 bg-gray-50">
          <h2 className="text-xl font-semibold">
            Configuration
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Update repository-specific review settings.
          </p>
        </div>

        <div className="p-6">
          <SettingsForm
            settings={data?.data}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;