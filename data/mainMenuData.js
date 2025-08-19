export const homeItems = [
  {
    name: "Home 01",
    routePath: "/",
  },
  {
    name: "Home 02",
    routePath: "/home_2",
  },
  {
    name: "Home 03",
    routePath: "/home_3",
  },
  {
    name: "Home 04",
    routePath: "/home_4",
  },
  {
    name: "Home 05",
    routePath: "/home_5",
  },
  {
    name: "Home 06",
    routePath: "/home_6",
  },
  {
    name: "Home 07",
    routePath: "/home_7",
  },
  {
    name: "Home 08",
    routePath: "/home_8",
  },
  {
    name: "Home 09",
    routePath: "/home_9",
  },
  {
    name: "Home 10",
    routePath: "/home_10",
  },
];
export const blogItems = [
  {
    name: "Blog List V1",
    routePath: "/blog-list-v1",
  },
  {
    name: "Blog List V2",
    routePath: "/blog-list-v2",
  },
  {
    name: "Blog Single",
    routePath: "/blog-details/1",
  },
];
export const pageItems = [
  {
    name: "404",
    routePath: "/404",
  },
  {
    name: "About",
    routePath: "/about",
  },
  {
    name: "Become Expert",
    routePath: "/become-expert",
  },
  {
    name: "Help Center",
    routePath: "/help-center",
  },
  {
    name: "Login",
    routePath: "/login",
  },
  {
    name: "Register",
    routePath: "/signup",
  },
  {
    name: "Terms",
    routePath: "/terms",
  },
  {
    name: "Invoice",
    routePath: "/invoice",
  },
];
export const dashboardItems = [
  {
    name: "Dashboard",
    routePath: "/dashboard/db-dashboard",
  },
  {
    name: "Booking History",
    routePath: "/dashboard/db-booking",
  },
  {
    name: "Wishlist",
    routePath: "/dashboard/db-wishlist",
  },
  {
    name: "Settings",
    routePath: "/dashboard/db-settings",
  },
  {
    name: "Vendor Dashboard",
    routePath: "/vendor-dashboard/dashboard",
  },
  {
    name: "Vendor Add Hotel",
    routePath: "/vendor-dashboard/add-hotel",
  },
  {
    name: "Vendor Booking",
    routePath: "/vendor-dashboard/booking",
  },
  {
    name: "Vendor Hotels",
    routePath: "/vendor-dashboard/hotels",
  },
  {
    name: "Vendor Recovery",
    routePath: "/vendor-dashboard/recovery",
  },
  {
    name: "Logout",
    routePath: "/login",
  },
];

export const categorieMegaMenuItems = [
  {
    id: 1,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/7.png",
        title: "Things to do on your hotel",
        btnText: "See Hotel",
        btnRoute: "/hotel-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Hotel List",
            menuList: [
              {
                name: "Hotel List v1",
                routePath: "/hotel-list-v1",
              },
              {
                name: "Hotel List v2",
                routePath: "/hotel-list-v2",
              },
              {
                name: "Hotel List v3",
                routePath: "/hotel-list-v3",
              },
              {
                name: "Hotel List v4",
                routePath: "/hotel-list-v4",
              },
              {
                name: "Hotel List v5",
                routePath: "/hotel-list-v5",
              },
            ],
          },
          {
            id: 2,
            title: "Hotel Single",
            menuList: [
              {
                name: "Hotel Single v1",
                routePath: "/hotel-single-v1/5",
              },
              {
                name: "Hotel Single v2",
                routePath: "/hotel-single-v2/3",
              },
            ],
          },
          {
            id: 3,
            title: "Hotel Booking",
            menuList: [
              {
                name: "Booking Page",
                routePath: "/booking-page",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/8.png",
        title: "Things to do on your tour",
        btnText: "See Tour",
        btnRoute: "/tour-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Tour List",
            menuList: [
              {
                name: "Tour List v1",
                routePath: "/tour-list-v1",
              },
              {
                name: "Tour List v2",
                routePath: "/tour-list-v2",
              },
            ],
          },
          {
            id: 2,
            title: "Tour Pages",
            menuList: [
              {
                name: "Tour Map",
                routePath: "/tour-list-v3",
              },
              {
                name: "Tour Single",
                routePath: "/tour-single/5",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/9.png",
        title: "Things to do on your activity",
        btnText: "See Activity",
        btnRoute: "/activity-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Activity List",
            menuList: [
              {
                name: "Activity List v1",
                routePath: "/activity-list-v1",
              },
              {
                name: "Activity List v2",
                routePath: "/activity-list-v2",
              },
            ],
          },
          {
            id: 2,
            title: "Activity Pages",
            menuList: [
              {
                name: "Activity Map",
                routePath: "/activity-list-v3",
              },
              {
                name: "Activity Single",
                routePath: "activity-single",
                routePath: "/activity-single/3",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/10.png",
        title: "Things to do on your rentals",
        btnText: "See Rental",
        btnRoute: "/rental-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Rental List",
            menuList: [
              {
                name: "Rental List v1",
                routePath: "/rental-list-v1",
              },
              {
                name: "Rental List v2",
                routePath: "/rental-list-v2",
              },
            ],
          },
          {
            id: 2,
            title: "Rental Pages",
            menuList: [
              {
                name: "Rental Map",
                routePath: "/rental-list-v3",
              },
              {
                name: "Rental Single",
                routePath: "/rental-single/3",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/5.png",
        title: "Things to do on your Next Car",
        btnText: "See Car",
        btnRoute: "/car-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Car List",
            menuList: [
              {
                name: "Car List v1",
                routePath: "/car-list-v1",
              },
              {
                name: "Car List v2",
                routePath: "/car-list-v2",
              },
            ],
          },
          {
            id: 2,
            title: "Car Pages",
            menuList: [
              {
                name: "Car Map",
                routePath: "/car-list-v3",
              },
              {
                name: "Car Single",
                routePath: "/car-single/1",
                routePath: "/car-single/1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/1.png",
        title: "Things to do on your Cruise",
        btnText: "See Cruise",
        btnRoute: "/cruise-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Cruise List",
            menuList: [
              {
                name: "Cruise List v1",
                routePath: "/cruise-list-v1",
              },
              {
                name: "Cruise List v2",
                routePath: "/cruise-list-v2",
              },
            ],
          },
          {
            id: 2,
            title: "Cruise Pages",
            menuList: [
              {
                name: "Cruise Map",
                routePath: "/cruise-list-v3",
              },
              {
                name: "Cruise Single",
                routePath: "/cruise-single/3",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/2.png",
        title: "Things to do on your flights",
        btnText: "See Flights",
        btnRoute: "/flight-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Flight List",
            menuList: [
              {
                name: "Flight List v1",
                routePath: "/flight-list-v1",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const categorieMobileItems = [
  {
    id: 1,
    title: "Hotel",
    menuItems: [
      {
        id: 1,
        title: "Hotel List",
        menuList: [
          {
            name: "Hotel List v1",
            routePath: "/hotel-list-v1",
          },
          {
            name: "Hotel List v2",
            routePath: "/hotel-list-v2",
          },
          {
            name: "Hotel List v3",
            routePath: "/hotel-list-v3",
          },
          {
            name: "Hotel List v4",
            routePath: "/hotel-list-v4",
          },
          {
            name: "Hotel List v5",
            routePath: "/hotel-list-v5",
          },
        ],
      },
      {
        id: 2,
        title: "Hotel Single",
        menuList: [
          {
            name: "Hotel Single v1",
            routePath: "/hotel-single-v1/5",
          },
          {
            name: "Hotel Single v2",
            routePath: "/hotel-single-v2/5",
          },
        ],
      },
      {
        id: 3,
        title: "Hotel Booking",
        menuList: [
          {
            name: "Booking Page",
            routePath: "/booking-page",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Tour",
    menuItems: [
      {
        id: 1,
        title: "Tour List",
        menuList: [
          {
            name: "Tour List v1",
            routePath: "/tour-list-v1",
          },
          {
            name: "Tour List v2",
            routePath: "/tour-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Tour Pages",
        menuList: [
          {
            name: "Tour Map",
            routePath: "/tour-list-v3",
          },
          {
            name: "Tour Single",
            routePath: "/tour-single/5",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Activity",
    menuItems: [
      {
        id: 1,
        title: "Activity List",
        menuList: [
          {
            name: "Activity List v1",
            routePath: "/activity-list-v1",
          },
          {
            name: "Activity List v2",
            routePath: "/activity-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Activity Pages",
        menuList: [
          {
            name: "Activity Map",
            routePath: "/activity-list-v3",
          },
          {
            name: "Activity Single",
            routePath: "/activity-single/3",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Hotel Rentals",
    menuItems: [
      {
        id: 1,
        title: "Rental List",
        menuList: [
          {
            name: "Rental List v1",
            routePath: "/rental-list-v1",
          },
          {
            name: "Rental List v2",
            routePath: "/rental-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Rental Pages",
        menuList: [
          {
            name: "Rental Map",
            routePath: "/rental-list-v3",
          },
          {
            name: "Rental Single",
            routePath: "/rental-single/3",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Car",
    menuItems: [
      {
        id: 1,
        title: "Car List",
        menuList: [
          {
            name: "Car List v1",
            routePath: "/car-list-v1",
          },
          {
            name: "Car List v2",
            routePath: "/car-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Car Pages",
        menuList: [
          {
            name: "Car Map",
            routePath: "/car-list-v3",
          },
          {
            name: "Car Single",
            routePath: "/car-single/1",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Cruise",
    menuItems: [
      {
        id: 1,
        title: "Cruise List",
        menuList: [
          {
            name: "Cruise List v1",
            routePath: "/cruise-list-v1",
          },
          {
            name: "Cruise List v2",
            routePath: "/cruise-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Cruise Pages",
        menuList: [
          {
            name: "Cruise Map",
            routePath: "/cruise-list-v3",
          },
          {
            name: "Cruise Single",
            routePath: "/cruise-single/3",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Flights",
    menuItems: [
      {
        id: 1,
        title: "Flight List",
        menuList: [
          {
            name: "Flight List v1",
            routePath: "/flight-list-v1",
          },
        ],
      },
    ],
  },
];
