import React from "react";

const index = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <p>Get in touch</p>
        </div>
        <div className="max-w-xl text-center">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            {/* <Mail className="h-6 w-6 md:h-8 md:w-8" /> */}
            {/* <Link href={`mailto:${email}`}> */}
            <p>email</p>
            {/* </Link> */}
            {/* <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(email, "email")}
              showTooltip={isCopied && copiedValueType === "email"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton> */}
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            {/* <Phone className="h-6 w-6 md:h-8 md:w-8" /> */}
            {/* <Link href={`tel:${phone.replace(' ', '')}`}> */}
            <p>phone</p>
            {/* </Link> */}
            {/* <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(phone.replace(" ", ""), "phone")}
              showTooltip={isCopied && copiedValueType === "phone"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-center">
            You may also find me on these platforms!
          </div>
          {/* <SocialIcons /> */}
        </div>
      </div>
    </main>
  );
};

export default index;
