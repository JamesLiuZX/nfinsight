import MainLayout from "@/components/layouts/MainLayout";

export default function AnalyticsPage() {
  const analysisData =
    "This is a sample analysis of the company's performance over the past quarter. The company has shown significant growth in the tech sector and has outperformed its competitors in various metrics.";

  const similarCompaniesData = [
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
    { id: 3, name: "Company C" },
  ];

  const learningPointsData = [
    { id: 1, content: "Diversification is key to managing risk." },
    { id: 2, content: "Always research before investing." },
    { id: 3, content: "Monitor market trends regularly." },
  ];

  return (
    <MainLayout>
      <div className="flex w-full p-2 pb-8 sm:p-4 xl:p-8 xl:pt-4">
        {/* Analysis Section */}
        <div className="flex-1 border-2 border-black bg-gray-200 p-4">
          <h2 className="mb-4 text-2xl font-bold">Analysis</h2>
          <p>{analysisData}</p>
        </div>

        <div className="flex flex-1 flex-col space-y-4">
          {/* Similar Companies Section */}
          <div className="flex-1 border-2 border-black bg-gray-200 p-4">
            <h2 className="mb-4 text-2xl font-bold">Similar Companies</h2>
            <ul>
              {similarCompaniesData.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </ul>
          </div>

          {/* Learning Points Section */}
          <div className="flex-1 border-2 border-black bg-gray-200 p-4">
            <h2 className="mb-4 text-2xl font-bold">Learning Points</h2>
            <ul>
              {learningPointsData.map((point) => (
                <li key={point.id}>{point.content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
