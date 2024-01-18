import { UserButton } from '@clerk/nextjs';
import { NextPage } from 'next';
const DashboardPage: NextPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard page!</p>
            <UserButton afterSignOutUrl='/' />


        
        </div>
    );
};

export default DashboardPage;
