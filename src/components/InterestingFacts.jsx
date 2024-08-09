import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const spaceFacts = [
  "The Sun makes up 99.86% of the mass in the solar system.",
  "One day on Venus is longer than one year on Earth.",
  "The Great Red Spot on Jupiter has been raging for over 300 years.",
  "Saturn's rings are made mostly of water ice and rock.",
  "There are more stars in the universe than grains of sand on Earth.",
];

const InterestingFacts = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const nextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % spaceFacts.length);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Interesting Space Facts</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{spaceFacts[currentFactIndex]}</p>
        <Button onClick={nextFact}>Next Fact</Button>
      </CardContent>
    </Card>
  );
};

export default InterestingFacts;
