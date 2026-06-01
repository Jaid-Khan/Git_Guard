import { useState } from "react";

const SettingsForm = ({
  settings,
  onSave,
}) => {
  const [form, setForm] =
    useState(settings);

  const handleChange = (e) => {
    const { name, value, checked, type } =
      e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <label className="block">
        <input
          type="checkbox"
          name="enabled"
          checked={form.enabled}
          onChange={handleChange}
        />

        <span className="ml-2">
          Enable Reviews
        </span>
      </label>

      <select
        name="minSeverity"
        value={form.minSeverity}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="LOW">
          LOW
        </option>

        <option value="MEDIUM">
          MEDIUM
        </option>

        <option value="HIGH">
          HIGH
        </option>

        <option value="CRITICAL">
          CRITICAL
        </option>
      </select>

      <label className="block">
        <input
          type="checkbox"
          name="reviewSecurity"
          checked={form.reviewSecurity}
          onChange={handleChange}
        />

        <span className="ml-2">
          Security Reviews
        </span>
      </label>

      <label className="block">
        <input
          type="checkbox"
          name="reviewPerformance"
          checked={form.reviewPerformance}
          onChange={handleChange}
        />

        <span className="ml-2">
          Performance Reviews
        </span>
      </label>

      <label className="block">
        <input
          type="checkbox"
          name="reviewCodeQuality"
          checked={form.reviewCodeQuality}
          onChange={handleChange}
        />

        <span className="ml-2">
          Code Quality Reviews
        </span>
      </label>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Save Settings
      </button>
    </form>
  );
};

export default SettingsForm;