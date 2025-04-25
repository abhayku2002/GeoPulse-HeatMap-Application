
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DailyFootprint = () => {
  // Placeholder for calculated carbon footprint
  const carbonFootprint = 15.5; // Example value

  return (
    <Card className="w-[600px] bg-card text-card-foreground shadow-lg rounded-lg mt-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your Daily Footprint</CardTitle>
        <CardDescription>
          Here's your estimated carbon footprint for today.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="text-4xl font-bold text-primary">
          {carbonFootprint} kg CO2e
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Keep tracking to reduce your environmental impact!
        </p>
      </CardContent>
    </Card>
  );
};

export default DailyFootprint;
