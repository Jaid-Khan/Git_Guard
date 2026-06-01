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
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Repository Settings
      </h1>

      <SettingsForm
        settings={data?.data}
        onSave={handleSave}
      />
    </div>
  );
};

export default Settings;