import HomeNav from "./_components/HomeNav";

export const metadata = {
  title: "Home Dashboard",
  description: "Home Dashboard",
};

export default function Layout({
  children,
}) {
  return (  
      <div className="flex flex-col w-full  min-h-screen">
     
          <div className="border-b border-gray-200 homeBg"><HomeNav/></div>
          <div className="flex-1 bg-gray-50 dark:bg-sky-50 homeBg max-w-screen-2xl">{children}</div>
      
      </div>
  
    
  );
}
