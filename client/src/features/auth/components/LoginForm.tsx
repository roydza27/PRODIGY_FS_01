export default function LoginForm() {
   return (
      // Removed the <main> wrapper since AuthLayout is already handling the full screen & centering
      <div className="w-full max-w-6xl mx-auto">
         
         <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-12 w-full">
            
            {/* Left Side: Form Container */}
            <div className="border border-slate-800 rounded-xl p-6 max-w-md w-full mx-auto shadow-lg md:p-8 lg:mx-0 lg:ml-auto">
               <div className="mb-8 text-center">
                  <h1 className="text-white text-4xl font-bold mb-4">Sign in</h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     Sign in to your account to access your dashboard and manage your projects.
                  </p>
               </div>

               <form className="space-y-6">
                  <div>
                     <label htmlFor="email" className="mb-2 text-slate-400 font-medium text-sm block">
                        Email
                     </label>
                     {/* Inputs stay white as per the screenshot */}
                     <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  
                  <div>
                     <label htmlFor="password" className="mb-2 text-slate-400 font-medium text-sm block">
                        Password
                     </label>
                     <input type="password" id="password" name="password" placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                     <label className="flex items-center cursor-pointer">
                        <input id="remember" name="remember" type="checkbox" required 
                               className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                        <span className="ml-3 text-sm text-slate-400">
                           Remember me
                        </span>
                     </label>

                     <a href="/forgotPassword" className="text-sm font-medium text-blue-500 hover:text-blue-400 hover:underline">
                        Forgot password?
                     </a>
                  </div>

                  <button type="submit"
                     className="w-full py-2.5 px-4 text-sm rounded-md font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500">
                     Sign in
                  </button>

                  <div className="text-slate-400 text-sm text-center">
                     Don't have an account? 
                     <a href="/register" className="text-blue-500 hover:text-blue-400 hover:underline ml-1 font-medium">
                        Sign up
                     </a>
                  </div>
               </form>
            </div>

            {/* Right Side: Image Container */}
            {/* 'hidden lg:block' ensures the image vanishes on tablets/phones (< 1024px) */}
            <div className="hidden lg:block max-w-lg mx-auto">
               <img 
                  src="https://readymadeui.com/images/integration-illus.webp" 
                  className="w-full object-contain"
                  alt="login illustration" 
               />
            </div>

         </div>
      </div>
   );
}