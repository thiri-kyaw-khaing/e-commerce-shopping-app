import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-300 pl-12">
      <div className="container mx-auto pb-8 pt-6 lg:py-6 w-full max-w-screen-xl">
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 mr-5">
          <section className="w-full lg:w-1/4 flex flex-col gap-6">
            <Link to="/" className="flex items-center space-x-2 ">
              <div className="font-bold inline-block">E-commerce</div>
            </Link>
            <span className="text-gray-500 text-sm">
              {siteConfig.description}
            </span>
          </section>

          <section className="grid  grid-cols-4 gap-12 mr-5">
            {siteConfig.footerNav.map((tit) => (
              <div>
                <h4 className="font-bold text-lg mb-4">{tit.title}</h4>
                <ul>
                  {tit.items.map((item) => (
                    <li>
                      <Link
                        to={String(item.title)}
                        className="text-muted-foreground text-sm hover:text-foreground"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
      </div>
    </footer>
  );
}
