import perksIcon1 from "../assets/perksIcon1.png"
import perksIcon2 from "../assets/perksIcon2.png"
import perksIcon3 from "../assets/perksIcon3.png"
import perksIcon4 from "../assets/perksIcon4.png"
import { Link } from 'react-router';

function Perks() {
  const perksData = [
    {
      id: 1,
      icon: perksIcon1,
      title: "Ən yaxşı qiymətə zəmanət!",
      description: "Daha ucuz tap, qiymət fərqinin 120%-ni geri al",
      path: "en-yaxsi-qiymete-zemanet"
    },
    {
      id: 2,
      icon: perksIcon2,
      title: "Qapıda rəsmiləşdirmə",
      description: "Nağd, hissə-hissə və ya kartla ödəmə imkanı",
      path: "catdirilma-ve-odeme"
    },
    {
      id: 3,
      icon: perksIcon3,
      title: "Zəmanət seçimi",
      description: "İstehsalçı zəmanəti, qızıl zəmanət, zəmanət plus",
    },
    {
      id: 4,
      icon: perksIcon4,
      title: "Pulsuz çatdırılma",
      description: "49.99AZN-dən yuxarı sifarişlərə pulsuz çatdırılma",
      path: "catdirilma-ve-odeme"
    }
  ];

  return (
    <section className="max-w-[1450px] mx-auto mx-3">
      <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] font-[Montserrat,sans-serif] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2">
        {perksData.map((perk) => (
          <Link to={perk.path} key={perk.id}>
            <div className="flex items-center gap-4 bg-white p-5 rounded-[10px] min-w-[335px] flex-1">
              {typeof perk.icon === 'string' ? (
                <img src={perk.icon} alt={perk.title} className="w-8 h-8 object-contain shrink-0" />
              ) : (
                perk.icon
              )}
              <div>
                <h3 className="text-[15px] font-[600] text-[#323232] mb-1 leading-tight">
                  {perk.title}
                </h3>
                <p className="text-[12px] text-[#777777] leading-snug">
                  {perk.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Perks;