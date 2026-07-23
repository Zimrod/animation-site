export default function GridBackground() {
  return (
    <>
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundColor: "#f8f5ee",
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="fixed inset-0 -z-10 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(0,0,0,.05), transparent 220px),
            radial-gradient(circle at 70% 80%, rgba(0,0,0,.04), transparent 250px),
            radial-gradient(circle at 90% 10%, rgba(0,0,0,.03), transparent 180px)
          `,
        }}
      />
    </>
  );
}