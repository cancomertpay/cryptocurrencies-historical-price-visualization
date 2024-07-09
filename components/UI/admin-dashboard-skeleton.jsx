function AdminDashboardSkeleton() {
  return (
    <div className="w-full h-[774px] rounded-xl bg-black/90 animate-pulse mt-5">
      <div className="p-10">
        <div className="w-[6rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
        <div className="w-[10rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse" />
      </div>
      <div className="p-10">
        <div className="w-full h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-[6rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
              <th className="w-[10rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
              <th className="w-[10rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
              <th className="w-[10rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
            </tr>
          </thead>
          <tbody>
            {Array(6)
              .fill()
              .map((_, index) => (
                <tr key={index}>
                  <td className="w-[6rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
                  <td className="w-[10rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
                  <td className="w-[10rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
                  <td className="w-[10rem] h-[1rem] rounded-xl bg-gray-700 animate-pulse mb-2" />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboardSkeleton;
