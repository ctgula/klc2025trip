'use client';

import dynamic from &quot;next/dynamic&quot;;

const BottomNavigation = dynamic(() => import(&quot;./BottomNavigation&quot;), {
  ssr: false,
});

export default function ClientBottomNavigation() {
  return <BottomNavigation />;
}
