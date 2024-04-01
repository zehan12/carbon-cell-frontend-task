export const HomeCard = ({ title, value, percentage, icon }: any) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-zinc-700 shadow-xl bg-slate-850 rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-white opacity-60">
                  {title}
                </p>
                <h5 className="mb-2 font-bold text-white">{value}</h5>
                <p className="mb-0 text-white opacity-60">
                  <span className="text-sm font-bold leading-normal text-emerald-500">
                    {percentage}{"  "}
                  </span>
                  since last week
                </p>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div
                className="w-12 h-12 flex justify-center items-center rounded-md text-center border-2 rounded-circle bg-opacity-90"
              >
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
