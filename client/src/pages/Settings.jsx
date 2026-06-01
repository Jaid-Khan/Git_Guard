import useApi from "../hooks/useApi";

import {
  getSettings,
  updateSettings,
} from "../services/api";

import SettingsForm from "../components/SettingsForm";

const repoName =
  "Jaid-Khan/Gitguard-PR-Test-Repo";

const Settings = () => {
  const { data, loading } =
    useApi(() =>
      getSettings(repoName)
    );

  const handleSave = async (
    updatedSettings
  ) => {
    await updateSettings(
      repoName,
      updatedSettings
    );

    alert("Settings Saved");
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
        settings={data.data}
        onSave={handleSave}
      />
    </div>
  );
};

export default Settings;