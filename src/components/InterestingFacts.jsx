import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const facts = [
  "The shortest war in history lasted 38 minutes.",
  "A group of flamingos is called a 'flamboyance'.",
  "The world's oldest known living tree is over 5,000 years old.",
  "Honeybees can recognize human faces.",
  "The Great Wall of China is not visible from space with the naked eye.",
  "A day on Venus is longer than its year.",
  "The fingerprints of koalas are virtually indistinguishable from human fingerprints.",
  "The Hawaiian alphabet has only 12 letters.",
  "Octopuses have three hearts.",
  "A 'jiffy' is an actual unit of time: 1/100th of a second."
];

const InterestingFacts = () => {
  const [fact, setFact] = useState('');

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Did You Know?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{fact}</p>
        <Button onClick={getRandomFact}>New Fact</Button>
      </CardContent>
    </Card>
  );
};

export default InterestingFacts;
