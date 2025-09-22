export default function Loading() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <div className="skeleton h-10 w-1/3" />
      <div className="skeleton h-5 w-2/3 mt-4" />
    </div>
  );
}
