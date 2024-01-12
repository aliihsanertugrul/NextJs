import Test from '@/components/dashboard/test'
import React from 'react'
export const metadata = {
	title: "Dashboard",
	description: "Luxury furniture for your comfort",
};


const DashboardPage = () => {
  return (
    <div>DashboardPage


      <a href="#" className="nav-link active">Test link</a>

      <Test/>
    </div>
  )
}

export default DashboardPage