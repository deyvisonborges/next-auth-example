import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  // () =>
  //   import("../components/dynamic-component"),  // usando default export
  () =>
    import("../components/dynamic-component").then(
      (mod) => mod.DynamicComponent
    ), // usando named export
  {
    ssr: true,
    loading: () => <p>Carregando...</p>, // Usa 'loading' em vez de 'loader'
  }
);

export default function Home() {
  return (
    <div>
      <DynamicComponent />

      <button>Login com Github</button>
    </div>
  );
}
