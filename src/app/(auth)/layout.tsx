import type { Metadata } from "next";
import "./globals.css";
import  {Roboto,  Poppins} from  "next/font/google"


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const  robooto =  Roboto({weight:"100",  subsets:["latin"], variable:"--font-roboto"});
const  popins  =  Poppins({weight:"100",  subsets:["latin-ext"],variable:"--font-poppins"})


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robooto.variable} ${popins.variable} antialiased min-h-screen bg-background`}
      >
        <main  className="w-full">
          {children}
        </main>

 
      </body>
    </html>
  );
}



