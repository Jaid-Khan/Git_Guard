import { useState } from "react";

const SetupGuide = () => {
  const [copied, setCopied] = useState(false);

  const webhookUrl = "https://git-guard.onrender.com/api/webhook/github";

  const copyWebhook = async () => {
    await navigator.clipboard.writeText(webhookUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const workflowSteps = [
    "Developer creates a Pull Request",
    "GitHub sends webhook event",
    "GitGuard receives PR data",
    "GitGuard fetches changed code diff",
    "Llama 3.1 analyzes code",
    "Bugs and vulnerabilities detected",
    "Suggested fixes generated",
    "Review posted to GitHub Pull Request",
    "Review saved in MongoDB",
    "Dashboard analytics updated",
  ];

  const testingSteps = [
    "Create a new branch",
    "Add intentional bug",
    "Push code",
    "Open Pull Request",
    "Verify GitGuard posts review comments",
    "Verify review appears in Dashboard",
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
          GitGuard AI
        </span>

        <h1 className="text-4xl font-bold mt-4">Repository Setup Guide</h1>

        <p className="text-gray-500 mt-3 max-w-2xl">
          Connect your GitHub repository and start receiving AI-powered pull
          request reviews, bug detection, and automated code feedback.
        </p>
      </div>

      {/* Step 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            1
          </div>

          <h2 className="text-xl font-semibold">Configure GitHub Webhook</h2>
        </div>

        <p className="mb-4 text-gray-600">Navigate to:</p>

        <div className="bg-gray-100 p-4 rounded-xl font-medium">
          Repository → Settings → Webhooks → Add Webhook
        </div>

        <div className="mt-6 bg-gray-50 border rounded-xl p-4">
          <label className="font-medium block mb-2">Payload URL</label>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              value={webhookUrl}
              readOnly
              className="flex-1 border rounded-lg px-4 py-3 bg-white"
            />

            <button
              onClick={copyWebhook}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>

        <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>

            <span className="font-semibold text-green-700">
              Active Endpoint
            </span>
          </div>

          <p className="text-sm break-all mt-2">{webhookUrl}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">Content Type</p>

            <p className="font-semibold">application/json</p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">Secret</p>

            <p className="font-semibold">
              {import.meta.env.VITE_WEBHOOK_SECRET
                ? "Configured"
                : "Configured by Administrator"}
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">Events</p>

            <p className="font-semibold">Pull Requests</p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            2
          </div>

          <h2 className="text-xl font-semibold">Required GitHub Permissions</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left">Permission</th>

                <th className="p-4 text-left">Access Level</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-4">Pull Requests</td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Read & Write
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Contents</td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Read
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Metadata</td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Read
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            3
          </div>

          <h2 className="text-xl font-semibold">GitGuard AI Workflow</h2>
        </div>

        <div className="space-y-4">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            4
          </div>

          <h2 className="text-xl font-semibold">Test Integration</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testingSteps.map((step, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 hover:bg-gray-50 transition"
            >
              {index + 1}. {step}
            </div>
          ))}
        </div>
      </div>

      {/* Example */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-5">Example Test Case</h2>

        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-gray-800 text-gray-300 text-sm">
            buggy-code.js
          </div>

          <pre className="p-4 text-green-400 overflow-auto">
            {`for(let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}`}
          </pre>
        </div>

        <p className="mt-6 mb-4 text-gray-600">
          GitGuard AI should detect the off-by-one error and suggest:
        </p>

        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-gray-800 text-gray-300 text-sm">
            fixed-code.js
          </div>

          <pre className="p-4 text-green-400 overflow-auto">
            {`for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SetupGuide;
