
import CarbonFootprintForm from "@/components/CarbonFootprintForm";
import DailyFootprint from "@/components/DailyFootprint";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-secondary">
      <h1 className="text-4xl font-bold mb-4 text-primary">CarbonWise</h1>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <CarbonFootprintForm />
        <DailyFootprint />
      </main>
      <footer className="w-full max-w-md border-t p-4">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} CarbonWise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
