import PlanCard from "./PlanCard";

export default function PlanPicker({ plans, seats, months }) {
  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-10">
      {plans.map((plan) => (
        <PlanCard
          key={plan.name}
          name={plan.name}
          price={plan.price}
          storage={plan.storage}
          support={plan.support}
          seats={seats}
          months={months}
        />
      ))}
    </main>
  );
}