import { LandingNavbar } from '@/components/landing-navbar';
import { LandingHero } from '@/components/landing-hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage= () => {
    return (
        <div>
            <LandingNavbar/>
            <LandingHero/>


        </div>

    );
};

export default LandingPage;
