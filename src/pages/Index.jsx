import { Paw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200">
      <div className="text-center">
        <Paw className="h-24 w-24 text-purple-600 mx-auto mb-8" />
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Pawsome</h1>
        <p className="text-xl text-gray-600 mb-8">Discover the perfect companion for your furry friends</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
