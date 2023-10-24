import ExampleStyles from './Example.module.css';

export default function ExamplePage() {
  return (
    <div className={ExampleStyles.Example}>
      <h2 data-testid = 'example-heading'>HELLO WORLD, THIS IS THE EXAMPLE PAGE</h2>
    </div>
  );
};