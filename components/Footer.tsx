import Link from 'next/link';
import { FaEnvelope, FaPhone } from &apos;react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=&quot;bg-gray-800 text-white&quot;>
      <div className=&quot;container-custom py-10&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
          <div>
            <div className=&quot;mb-6&quot;>
              <h3 className=&quot;text-2xl font-bold text-white tracking-wide border-b-2 border-blue-400 pb-2 inline-block&quot;>Kingdom Life Community Church <span className=&quot;text-blue-300&quot;>&amp;</span> Living Word International Christian Church</h3>
            </div>
            <p className=&quot;text-gray-300 mb-4&quot;>
              A one-day group trip to Lancaster, Pennsylvania, hosted by Kingdom Life Community Church (KLCC) and Living Word International Christian Church (LWICC).
            </p>
          </div>
          
          <div>
            <h3 className=&quot;text-xl font-semibold mb-4&quot;>Quick Links</h3>
            <ul className=&quot;space-y-2&quot;>
              <li>
                <Link href=&quot;/itinerary&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                  Itinerary
                </Link>
              </li>
              <li>
                <Link href=&quot;/destinations&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                  Destinations
                </Link>
              </li>
              <li>
                <Link href=&quot;/transportation&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                  Transportation
                </Link>
              </li>
              <li>
                <Link href=&quot;/contact&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className=&quot;text-xl font-semibold mb-4&quot;>Contact</h3>
            <div className=&quot;space-y-4&quot;>
              <div>
                <h4 className=&quot;font-medium text-white mb-2&quot;>Kingdom Life Community Church (KLCC)</h4>
                <p className=&quot;flex items-center text-gray-300&quot;>
                  <FaEnvelope className=&quot;mr-2&quot; />
                  <a href=&quot;mailto:info@kingdomlifecc.org&quot; className=&quot;hover:text-white transition-colors&quot;>
                    info@kingdomlifecc.org
                  </a>
                </p>
                <p className=&quot;flex items-center text-gray-300&quot;>
                  <FaPhone className=&quot;mr-2&quot; />
                  <a href=&quot;tel:3015551234&quot; className=&quot;hover:text-white transition-colors&quot;>
                    (301) 555-1234
                  </a>
                </p>
              </div>
              
              <div>
                <h4 className=&quot;font-medium text-white mb-2&quot;>Living Word International Christian Church (LWICC)</h4>
                <p className=&quot;flex items-center text-gray-300&quot;>
                  <FaEnvelope className=&quot;mr-2&quot; />
                  <a href=&quot;mailto:info@lwicc.org&quot; className=&quot;hover:text-white transition-colors&quot;>
                    info@lwicc.org
                  </a>
                </p>
                <p className=&quot;flex items-center text-gray-300&quot;>
                  <FaPhone className=&quot;mr-2&quot; />
                  <a href=&quot;tel:3019894673&quot; className=&quot;hover:text-white transition-colors&quot;>
                    (301) 989-4673
                  </a>
                </p>
                <p className=&quot;text-gray-300 mt-2&quot;>
                  16819 New Hampshire Ave<br />
                  Silver Spring, MD 20905
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className=&quot;border-t border-gray-700 mt-8 pt-6 text-center text-gray-400&quot;>
          <p>© {currentYear} Lancaster Trip Hub. All rights reserved.</p>
          <p className=&quot;mt-2 text-sm&quot;>
            An event by Kingdom Life Community Church &amp; Living Word International Christian Church (KLCC &amp; LWICC)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
