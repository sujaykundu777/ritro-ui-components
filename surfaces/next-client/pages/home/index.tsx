import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to our Landing Page!</h1>
      <p>This is the home of our amazing product.</p>
      {/* Add your content here */}
    </div>
  );
};

// server side
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default LandingPage;
