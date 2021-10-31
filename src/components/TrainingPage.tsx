import React, {FC} from 'react';
import Card, { CardVariant } from './Card';
import EventsExample from './EventsExample';

const TrainingPage: FC = () => {
  return (
    <div>
      <Card
        variant={CardVariant.primary}
        width="100%" height="80%">
        <h3 style={{ textAlign: "center" }}>RTS-3</h3>
        <button>btn</button>
        <EventsExample />
      </Card>
    </div>
  );
};

export default TrainingPage;