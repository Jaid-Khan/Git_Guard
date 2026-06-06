import { useState } from "react";

const SetupGuide = () => {
  const [copied, setCopied] = useState(false);

  const webhookUrl = `${import.meta.env.VITE_BACKEND_URL}/api/webhook/github`;

  const copyWebhook = async () => {
    await navigator.clipboard.writeText(webhookUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">GitGuard AI Setup Guide</h1>

        <p className="text-gray-500 mt-2">
          Follow these steps to connect any GitHub repository with GitGuard AI.
        </p>
      </div>

      {/* Webhook URL */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Step 1: Configure GitHub Webhook
        </h2>

        <p className="mb-4">Navigate to:</p>

        <div className="bg-gray-100 p-3 rounded">
          Repository → Settings → Webhooks → Add Webhook
        </div>

        <div className="mt-4">
          <label className="font-medium block mb-2">Payload URL</label>

          <div className="flex gap-2">
            <input
              value={webhookUrl}
              readOnly
              className="flex-1 border rounded px-3 py-2 bg-gray-50"
            />

            <button
              onClick={copyWebhook}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="mt-4 p-4 bg-green-50 rounded-lg border">
  <p className="font-semibold text-green-700">
    Active GitGuard Endpoint
  </p>

  <p className="text-sm break-all mt-2">
    {webhookUrl}
  </p>
</div>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Content Type:</strong> application/json
          </p>

          <p>
            <strong>Secret:</strong>{" "}
            {import.meta.env.VITE_WEBHOOK_SECRET ||
              "Configured by Administrator"}
          </p>

          <p>
            <strong>Events:</strong> Pull Requests
          </p>
        </div>
      </div>

      {/* Permissions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Step 2: Required GitHub Permissions
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Permission</th>

              <th className="border p-2 text-left">Access Level</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">Pull Requests</td>

              <td className="border p-2">Read & Write</td>
            </tr>

            <tr>
              <td className="border p-2">Contents</td>

              <td className="border p-2">Read</td>
            </tr>

            <tr>
              <td className="border p-2">Metadata</td>

              <td className="border p-2">Read</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Flow */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Step 3: GitGuard AI Workflow
        </h2>

        <div className="space-y-2">
          <div>1. Developer creates a Pull Request</div>

          <div>2. GitHub sends webhook event</div>

          <div>3. GitGuard receives PR data</div>

          <div>4. GitGuard fetches changed code diff</div>

          <div>5. Llama 3.1 analyzes code</div>

          <div>6. Bugs and vulnerabilities detected</div>

          <div>7. Suggested fixes generated</div>

          <div>8. Review posted to GitHub PR</div>

          <div>9. Review saved in MongoDB</div>

          <div>10. Dashboard analytics updated</div>
        </div>
      </div>

      {/* Testing */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Step 4: Test Integration</h2>

        <ol className="list-decimal ml-5 space-y-2">
          <li>Create a new branch.</li>

          <li>Add intentional bug.</li>

          <li>Push code.</li>

          <li>Open Pull Request.</li>

          <li>Verify GitGuard posts review comments.</li>

          <li>Verify review appears in Dashboard.</li>
        </ol>
      </div>

      {/* Example Bug */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Example Test Case</h2>

        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {`for(let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}`}
        </pre>

        <p className="mt-4">
          GitGuard AI should detect the off-by-one error and suggest:
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-auto mt-2">
          {`for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`}
        </pre>
      </div>
    </div>
  );
};

export default SetupGuide;
