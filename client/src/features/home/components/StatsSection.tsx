const metrics = [
   {
      id: 1,
      value: "10",
      suffix: "+",
      label: "Protected Routes",
      description: "Securely restrict access to authenticated users across the application."
   },
   {
      id: 2,
      value: "256",
      suffix: "-bit",
      label: "Password Security",
      description: "Industry-standard encryption and hashing for secure credential storage."
   },
   {
      id: 3,
      value: "24",
      suffix: "/7",
      label: "Authentication Access",
      description: "Reliable login and registration systems available around the clock."
   },
   {
      id: 4,
      value: "99.9",
      suffix: "%",
      label: "System Reliability",
      description: "Consistent authentication performance with highly available infrastructure."
   }
];

export default function StatsSection() {

   return (
      <section className="bg-gray-50 py-8 px-4 md:px-8 md:py-12 dark:bg-neutral-800">
         <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <div className="text-center mb-12 md:mb-16">
               <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-50">
                  Application Metrics
               </h2>
            </div>

            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
               {metrics.map((item) => (
                  <li key={item.id} className="text-center">
                     <dl className="flex flex-col">
                        <dt className="text-slate-900 text-base font-semibold dark:text-slate-50">
                           {item.label}
                        </dt>
                        <dd className="-order-1 text-slate-900 text-4xl font-bold mb-6 dark:text-slate-50">
                           {item.value}
                           <span className="text-blue-600">{item.suffix}</span>
                        </dd>
                        <dd className="text-sm text-slate-600 mt-3 leading-relaxed dark:text-slate-400">
                           {item.description}
                        </dd>
                     </dl>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}