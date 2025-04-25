'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const CarbonFootprintForm = () => {
  const [transport, setTransport] = useState("");
  const [food, setFood] = useState("");
  const [electricity, setElectricity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual calculation logic
    console.log("Form submitted:", { transport, food, electricity });
  };

  return (
    <Card className="w-[600px] bg-card text-card-foreground shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Calculate Your Daily Impact
        </CardTitle>
        <CardDescription>
          Enter your daily activities to calculate your carbon footprint.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <Label htmlFor="transport">Transportation (km)</Label>
            <Input
              type="number"
              id="transport"
              placeholder="e.g., 20"
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="bg-input border rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div>
            <Label htmlFor="food">Food Consumption (calories)</Label>
            <Input
              type="number"
              id="food"
              placeholder="e.g., 2000"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              className="bg-input border rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div>
            <Label htmlFor="electricity">Electricity Usage (kWh)</Label>
            <Input
              type="number"
              id="electricity"
              placeholder="e.g., 5"
              value={electricity}
              onChange={(e) => setElectricity(e.target.value)}
              className="bg-input border rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <Button className="bg-primary text-primary-foreground rounded-md hover:bg-primary/80">
            Calculate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CarbonFootprintForm;
