export const navItems =  [
  
    {
      label: "Home",
      link: "/",
      both: true,
    },

    {
      label: "Login",
      link: "/login",
      auth_required: false,
    },
    {
      label: "Signup",
      link: "/signup",
      auth_required: false,
    },
    {
      label: "Accepter",
      link: "/procurer",
      auth_required: true,
    },
    {
      label: "Donor",
      link: "/donor",
      auth_required: true,
    },
    // {
    //   label: "Logout",
    //   onclick: "click_handle",
    //   auth_required: true,
    // },
  ]
