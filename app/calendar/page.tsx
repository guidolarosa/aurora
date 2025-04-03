'use client'

import AppSidebar from "@/components/custom/Sidebar";
import { Calendar, CalendarCurrentDate, CalendarDayView, CalendarMonthView, CalendarNextTrigger, CalendarPrevTrigger, CalendarTodayTrigger, CalendarViewTrigger, CalendarWeekView, CalendarYearView } from "@/components/ui/full-calendar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { nationalHolidays } from "@/mocks/calendar/national_holidays";
import { party } from "@/mocks/calendar/party";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarPage = () => {
  return <SidebarProvider>
  <div className="font-[family-name:var(--font-geist-sans)] w-full">
    <AppSidebar />
    <div className="flex h-screen bg-white ml-64 p-10 flex-col">
      <h1 className="text-2xl font-bold">Calendario</h1>
      <Calendar events={[...nationalHolidays, ...party]} >
      <div className="h-dvh py-6 flex flex-col">
    <div className="flex items-center gap-2 mb-6">
      <div className="border rounded-md p-2 gap-2 flex">
        <CalendarViewTrigger className="aria-[current=true]:bg-accent cursor-pointer" view="day">
          Day
        </CalendarViewTrigger>
        <CalendarViewTrigger
          view="week"
          className="aria-[current=true]:bg-accent cursor-pointer"
        >
          Week
        </CalendarViewTrigger>
        <CalendarViewTrigger
          view="month"
          className="aria-[current=true]:bg-accent cursor-pointer"
        >
          Month
        </CalendarViewTrigger>
        <CalendarViewTrigger
          view="year"
          className="aria-[current=true]:bg-accent cursor-pointer"
        >
          Year
        </CalendarViewTrigger>
      </div>

      <span className="flex-1" />

      <CalendarCurrentDate />

      <CalendarPrevTrigger>
        <ChevronLeft size={20} />
        <span className="sr-only">Previous</span>
      </CalendarPrevTrigger>

      <CalendarTodayTrigger>Today</CalendarTodayTrigger>

      <CalendarNextTrigger>
        <ChevronRight size={20} />
        <span className="sr-only">Next</span>
      </CalendarNextTrigger>

      {/* <ModeToggle /> */}
    </div>

    <div className="flex-1 overflow-auto relative">
      <CalendarDayView />
      <CalendarWeekView />
      <CalendarMonthView />
      <CalendarYearView />
    </div>
  </div>
      </Calendar>
    </div>
  </div>
</SidebarProvider>;
};

export default CalendarPage;
