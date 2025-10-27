const users = [
  { id: 1, name: "Karan Sahu", username: "karansahu", password: "23456" },
  { id: 2, name: "Test User", username: "test", password: "12345" }
];

const timesheet = [
  { 
    id: 1, date: "1-5", month: "January", year: "2024", hour: "40",
    week: [
      { day: "1 Jan", project: "Website Design", work: ["API Integration", "Bug Fixing"], hour: "8 Hour" },
      { day: "2 Jan", project: "Website Design", work: ["Frontend Development"], hour: "8 Hour" },
      { day: "3 Jan", project: "Website Design", work: ["UI Testing"], hour: "8 Hour" },
      { day: "4 Jan", project: "Website Design", work: ["Backend Development"], hour: "8 Hour" },
      { day: "5 Jan", project: "Website Design", work: ["Documentation"], hour: "8 Hour" }
    ]
  },
  { 
    id: 2, date: "6-12", month: "January", year: "2024", hour: "53",
    week: [
      { day: "6 Jan", project: "Mobile App", work: ["UI Testing"], hour: "8 Hour" },
      { day: "7 Jan", project: "Mobile App", work: ["API Integration"], hour: "8 Hour" },
      { day: "8 Jan", project: "Mobile App", work: ["Feature Development"], hour: "8 Hour" },
      { day: "9 Jan", project: "Mobile App", work: ["Bug Fixing"], hour: "8 Hour" },
      { day: "10 Jan", project: "Mobile App", work: ["Code Review"], hour: "7 Hour" },
      { day: "11 Jan", project: "Mobile App", work: ["Documentation"], hour: "7 Hour" },
      { day: "12 Jan", project: "Mobile App", work: ["Performance Optimization"], hour: "7 Hour" }
    ]
  },
  { 
    id: 3, date: "13-20", month: "January", year: "2024", hour: "20",
    week: [
      { day: "13 Jan", project: "E-commerce Portal", work: ["UI Testing"], hour: "5 Hour" },
      { day: "14 Jan", project: "E-commerce Portal", work: ["Bug Fixing"], hour: "5 Hour" },
      { day: "15 Jan", project: "E-commerce Portal", work: ["Data Validation"], hour: "5 Hour" },
      { day: "16 Jan", project: "E-commerce Portal", work: ["Report Generation"], hour: "5 Hour" }
    ]
  },
  { 
    id: 4, date: "21-26", month: "January", year: "2024", hour: "35",
    week: [
      { day: "21 Jan", project: "CRM System", work: ["Backend Optimization"], hour: "6 Hour" },
      { day: "22 Jan", project: "CRM System", work: ["API Integration"], hour: "6 Hour" },
      { day: "23 Jan", project: "CRM System", work: ["Bug Fixing"], hour: "6 Hour" },
      { day: "24 Jan", project: "CRM System", work: ["Database Update"], hour: "6 Hour" },
      { day: "25 Jan", project: "CRM System", work: ["Testing"], hour: "6 Hour" },
      { day: "26 Jan", project: "CRM System", work: ["Documentation"], hour: "5 Hour" }
    ]
  },
  { 
    id: 5, date: "27-31", month: "January", year: "2024", hour: "53",
    week: [
      { day: "27 Jan", project: "Internal Tool", work: ["Feature Development"], hour: "11 Hour" },
      { day: "28 Jan", project: "Internal Tool", work: ["API Enhancement"], hour: "10 Hour" },
      { day: "29 Jan", project: "Internal Tool", work: ["Bug Fixing"], hour: "11 Hour" },
      { day: "30 Jan", project: "Internal Tool", work: ["Testing"], hour: "10 Hour" },
      { day: "31 Jan", project: "Internal Tool", work: ["Code Review"], hour: "11 Hour" }
    ]
  },
  { 
    id: 6, date: "1-5", month: "February", year: "2024", hour: "20",
    week: [
      { day: "1 Feb", project: "CRM System", work: ["API Integration", "Bug Fixing"], hour: "4 Hour" },
      { day: "2 Feb", project: "CRM System", work: ["Code Review"], hour: "4 Hour" },
      { day: "3 Feb", project: "CRM System", work: ["UI Testing"], hour: "4 Hour" },
      { day: "4 Feb", project: "CRM System", work: ["Documentation"], hour: "4 Hour" },
      { day: "5 Feb", project: "CRM System", work: ["Backend Development"], hour: "4 Hour" }
    ]
  },
  { 
    id: 7, date: "6-12", month: "February", year: "2024", hour: "55",
    week: [
      { day: "6 Feb", project: "Mobile App", work: ["Feature Development"], hour: "8 Hour" },
      { day: "7 Feb", project: "Mobile App", work: ["Bug Fixing"], hour: "8 Hour" },
      { day: "8 Feb", project: "Mobile App", work: ["UI Testing"], hour: "8 Hour" },
      { day: "9 Feb", project: "Mobile App", work: ["API Enhancement"], hour: "8 Hour" },
      { day: "10 Feb", project: "Mobile App", work: ["Code Review"], hour: "8 Hour" },
      { day: "11 Feb", project: "Mobile App", work: ["Documentation"], hour: "7 Hour" },
      { day: "12 Feb", project: "Mobile App", work: ["Performance Optimization"], hour: "8 Hour" }
    ]
  },
  { 
    id: 8, date: "13-20", month: "February", year: "2024", hour: "65",
    week: [
      { day: "13 Feb", project: "Website Design", work: ["Frontend Development"], hour: "8 Hour" },
      { day: "14 Feb", project: "Website Design", work: ["Backend Integration"], hour: "8 Hour" },
      { day: "15 Feb", project: "Website Design", work: ["Testing"], hour: "8 Hour" },
      { day: "16 Feb", project: "Website Design", work: ["Bug Fixing"], hour: "8 Hour" },
      { day: "17 Feb", project: "Website Design", work: ["Performance Tuning"], hour: "8 Hour" },
      { day: "18 Feb", project: "Website Design", work: ["API Refactoring"], hour: "8 Hour" },
      { day: "19 Feb", project: "Website Design", work: ["Documentation"], hour: "8 Hour" },
      { day: "20 Feb", project: "Website Design", work: ["Code Review"], hour: "9 Hour" }
    ]
  },
  { 
    id: 9, date: "20-28", month: "February", year: "2024", hour: "33",
    week: [
      { day: "20 Feb", project: "E-commerce Portal", work: ["Feature Update"], hour: "4 Hour" },
      { day: "21 Feb", project: "E-commerce Portal", work: ["Bug Fixing"], hour: "4 Hour" },
      { day: "22 Feb", project: "E-commerce Portal", work: ["UI Testing"], hour: "4 Hour" },
      { day: "23 Feb", project: "E-commerce Portal", work: ["Backend Optimization"], hour: "4 Hour" },
      { day: "24 Feb", project: "E-commerce Portal", work: ["Code Review"], hour: "4 Hour" },
      { day: "25 Feb", project: "E-commerce Portal", work: ["Documentation"], hour: "4 Hour" },
      { day: "26 Feb", project: "E-commerce Portal", work: ["API Integration"], hour: "4 Hour" },
      { day: "27 Feb", project: "E-commerce Portal", work: ["Testing"], hour: "3 Hour" },
      { day: "28 Feb", project: "E-commerce Portal", work: ["Deployment"], hour: "2 Hour" }
    ]
  },
  { 
    id: 10, date: "1-6", month: "March", year: "2024", hour: "44",
    week: [
      { day: "1 Mar", project: "Analytics Dashboard", work: ["Data Visualization"], hour: "7 Hour" },
      { day: "2 Mar", project: "Analytics Dashboard", work: ["API Integration"], hour: "7 Hour" },
      { day: "3 Mar", project: "Analytics Dashboard", work: ["Bug Fixing"], hour: "7 Hour" },
      { day: "4 Mar", project: "Analytics Dashboard", work: ["UI Testing"], hour: "7 Hour" },
      { day: "5 Mar", project: "Analytics Dashboard", work: ["Report Generation"], hour: "8 Hour" },
      { day: "6 Mar", project: "Analytics Dashboard", work: ["Documentation"], hour: "8 Hour" }
    ]
  },
  { 
    id: 11, date: "7-13", month: "March", year: "2024", hour: "12",
    week: [
      { day: "7 Mar", project: "HR Portal", work: ["UI Cleanup"], hour: "2 Hour" },
      { day: "8 Mar", project: "HR Portal", work: ["Testing"], hour: "2 Hour" },
      { day: "9 Mar", project: "HR Portal", work: ["Documentation"], hour: "2 Hour" },
      { day: "10 Mar", project: "HR Portal", work: ["Bug Fixing"], hour: "2 Hour" },
      { day: "11 Mar", project: "HR Portal", work: ["API Integration"], hour: "2 Hour" },
      { day: "12 Mar", project: "HR Portal", work: ["Review"], hour: "1 Hour" },
      { day: "13 Mar", project: "HR Portal", work: ["Deployment"], hour: "1 Hour" }
    ]
  },
  { 
    id: 12, date: "14-21", month: "March", year: "2024", hour: "22",
    week: [
      { day: "14 Mar", project: "Internal Tool", work: ["Bug Fixing"], hour: "3 Hour" },
      { day: "15 Mar", project: "Internal Tool", work: ["Code Review"], hour: "3 Hour" },
      { day: "16 Mar", project: "Internal Tool", work: ["Documentation"], hour: "3 Hour" },
      { day: "17 Mar", project: "Internal Tool", work: ["UI Testing"], hour: "3 Hour" },
      { day: "18 Mar", project: "Internal Tool", work: ["Backend Development"], hour: "3 Hour" },
      { day: "19 Mar", project: "Internal Tool", work: ["Feature Development"], hour: "3 Hour" },
      { day: "20 Mar", project: "Internal Tool", work: ["Deployment"], hour: "2 Hour" },
      { day: "21 Mar", project: "Internal Tool", work: ["API Integration"], hour: "2 Hour" }
    ]
  },
  { 
    id: 13, date: "22-26", month: "March", year: "2024", hour: "33",
    week: [
      { day: "22 Mar", project: "Inventory System", work: ["API Integration"], hour: "7 Hour" },
      { day: "23 Mar", project: "Inventory System", work: ["Bug Fixing"], hour: "7 Hour" },
      { day: "24 Mar", project: "Inventory System", work: ["UI Testing"], hour: "7 Hour" },
      { day: "25 Mar", project: "Inventory System", work: ["Documentation"], hour: "6 Hour" },
      { day: "26 Mar", project: "Inventory System", work: ["Backend Optimization"], hour: "6 Hour" }
    ]
  },
  { 
    id: 14, date: "27-31", month: "March", year: "2024", hour: "49",
    week: [
      { day: "27 Mar", project: "Website Design", work: ["Frontend Development"], hour: "10 Hour" },
      { day: "28 Mar", project: "Website Design", work: ["UI Testing"], hour: "10 Hour" },
      { day: "29 Mar", project: "Website Design", work: ["Bug Fixing"], hour: "10 Hour" },
      { day: "30 Mar", project: "Website Design", work: ["Documentation"], hour: "9 Hour" },
      { day: "31 Mar", project: "Website Design", work: ["Code Review"], hour: "10 Hour" }
    ]
  },
  { 
    id: 15, date: "1-5", month: "April", year: "2024", hour: "38",
    week: [
      { day: "1 Apr", project: "CRM System", work: ["API Integration"], hour: "8 Hour" },
      { day: "2 Apr", project: "CRM System", work: ["Bug Fixing"], hour: "8 Hour" },
      { day: "3 Apr", project: "CRM System", work: ["UI Testing"], hour: "7 Hour" },
      { day: "4 Apr", project: "CRM System", work: ["Backend Optimization"], hour: "7 Hour" },
      { day: "5 Apr", project: "CRM System", work: ["Documentation"], hour: "8 Hour" }
    ]
  },
  { 
    id: 16, date: "6-11", month: "April", year: "2024", hour: "40",
    week: [
      { day: "6 Apr", project: "Mobile App", work: ["Feature Development"], hour: "7 Hour" },
      { day: "7 Apr", project: "Mobile App", work: ["Testing"], hour: "7 Hour" },
      { day: "8 Apr", project: "Mobile App", work: ["Code Review"], hour: "6 Hour" },
      { day: "9 Apr", project: "Mobile App", work: ["Bug Fixing"], hour: "6 Hour" },
      { day: "10 Apr", project: "Mobile App", work: ["API Enhancement"], hour: "7 Hour" },
      { day: "11 Apr", project: "Mobile App", work: ["Documentation"], hour: "7 Hour" }
    ]
  },
  { 
    id: 17, date: "12-18", month: "April", year: "2024", hour: "30",
    week: [
      { day: "12 Apr", project: "HR Portal", work: ["API Integration"], hour: "5 Hour" },
      { day: "13 Apr", project: "HR Portal", work: ["UI Testing"], hour: "5 Hour" },
      { day: "14 Apr", project: "HR Portal", work: ["Bug Fixing"], hour: "5 Hour" },
      { day: "15 Apr", project: "HR Portal", work: ["Documentation"], hour: "5 Hour" },
      { day: "16 Apr", project: "HR Portal", work: ["Backend Update"], hour: "5 Hour" },
      { day: "17 Apr", project: "HR Portal", work: ["Code Review"], hour: "5 Hour" }
    ]
  },
  { 
    id: 18, date: "19-26", month: "April", year: "2024", hour: "32",
    week: [
      { day: "19 Apr", project: "Analytics Dashboard", work: ["API Integration"], hour: "4 Hour" },
      { day: "20 Apr", project: "Analytics Dashboard", work: ["Data Cleanup"], hour: "4 Hour" },
      { day: "21 Apr", project: "Analytics Dashboard", work: ["Testing"], hour: "4 Hour" },
      { day: "22 Apr", project: "Analytics Dashboard", work: ["Documentation"], hour: "4 Hour" },
      { day: "23 Apr", project: "Analytics Dashboard", work: ["Bug Fixing"], hour: "4 Hour" },
      { day: "24 Apr", project: "Analytics Dashboard", work: ["Deployment"], hour: "4 Hour" },
      { day: "25 Apr", project: "Analytics Dashboard", work: ["Review"], hour: "4 Hour" },
      { day: "26 Apr", project: "Analytics Dashboard", work: ["Code Optimization"], hour: "4 Hour" }
    ]
  },
  { 
    id: 19, date: "27-30", month: "April", year: "2024", hour: "25",
    week: [
      { day: "27 Apr", project: "Internal Tool", work: ["Backend Development"], hour: "6 Hour" },
      { day: "28 Apr", project: "Internal Tool", work: ["UI Testing"], hour: "6 Hour" },
      { day: "29 Apr", project: "Internal Tool", work: ["Bug Fixing"], hour: "6 Hour" },
      { day: "30 Apr", project: "Internal Tool", work: ["Documentation"], hour: "7 Hour" }
    ]
  },
  { 
    id: 20, date: "1-5", month: "May", year: "2024", hour: "41",
    week: [
      { day: "1 May", project: "Website Design", work: ["Frontend Development","UI Testing"], hour: "8 Hour" },
      { day: "2 May", project: "Website Design", work: ["Bug Fixing"], hour: "8 Hour" },
      { day: "3 May", project: "Website Design", work: ["Code Review"], hour: "8 Hour" },
      { day: "4 May", project: "Website Design", work: ["Documentation"], hour: "8 Hour" },
      { day: "5 May", project: "Website Design", work: ["Deployment"], hour: "9 Hour" }
    ]
  },
  { 
    id: 21, date: "6-13", month: "May", year: "2024", hour: "46",
    week: [
      { day: "6 May", project: "CRM System", work: ["API Integration"], hour: "6 Hour" },
      { day: "7 May", project: "CRM System", work: ["Backend Optimization"], hour: "6 Hour" },
      { day: "8 May", project: "CRM System", work: ["Bug Fixing"], hour: "6 Hour" },
      { day: "9 May", project: "CRM System", work: ["UI Testing"], hour: "6 Hour" },
      { day: "10 May", project: "CRM System", work: ["Feature Development"], hour: "6 Hour" },
      { day: "11 May", project: "CRM System", work: ["Documentation"], hour: "6 Hour" },
      { day: "12 May", project: "CRM System", work: ["Code Review"], hour: "5 Hour" },
      { day: "13 May", project: "CRM System", work: ["Deployment"], hour: "5 Hour" }
    ]
  },
  { 
    id: 22, date: "14-20", month: "May", year: "2024", hour: "10",
    week: [
      { day: "14 May", project: "HR Portal", work: ["UI Cleanup"], hour: "2 Hour" },
      { day: "15 May", project: "HR Portal", work: ["Testing"], hour: "2 Hour" },
      { day: "16 May", project: "HR Portal", work: ["Bug Fixing"], hour: "2 Hour" },
      { day: "17 May", project: "HR Portal", work: ["Documentation"], hour: "2 Hour" },
      { day: "18 May", project: "HR Portal", work: ["Code Review"], hour: "1 Hour" },
      { day: "19 May", project: "HR Portal", work: ["Deployment"], hour: "1 Hour" },
      { day: "20 May", project: "HR Portal", work: ["API Integration"], hour: "0 Hour" }
    ]
  },
  { 
    id: 23, date: "21-26", month: "May", year: "2024", hour: "69",
    week: [
      { day: "21 May", project: "E-commerce Portal", work: ["Feature Update"], hour: "12 Hour" },
      { day: "22 May", project: "E-commerce Portal", work: ["UI Testing"], hour: "12 Hour" },
      { day: "23 May", project: "E-commerce Portal", work: ["Bug Fixing"], hour: "12 Hour" },
      { day: "24 May", project: "E-commerce Portal", work: ["Backend Development"], hour: "11 Hour" },
      { day: "25 May", project: "E-commerce Portal", work: ["Documentation"], hour: "11 Hour" },
      { day: "26 May", project: "E-commerce Portal", work: ["Code Review"], hour: "11 Hour" }
    ]
  },
  { 
    id: 24, date: "27-31", month: "May", year: "2024", hour: "32",
    week: [
      { day: "27 May", project: "Internal Tool", work: ["Backend Development"], hour: "6 Hour" },
      { day: "28 May", project: "Internal Tool", work: ["Bug Fixing"], hour: "6 Hour" },
      { day: "29 May", project: "Internal Tool", work: ["API Integration"], hour: "6 Hour" },
      { day: "30 May", project: "Internal Tool", work: ["UI Testing"], hour: "7 Hour" },
      { day: "31 May", project: "Internal Tool", work: ["Documentation"], hour: "7 Hour" }
    ]
  },
  { 
    id: 25, date: "1-7", month: "June", year: "2024", hour: "54",
    week: [
      { day: "1 Jun", project: "Analytics Dashboard", work: ["Data Visualization"], hour: "8 Hour" },
      { day: "2 Jun", project: "Analytics Dashboard", work: ["Bug Fixing"], hour: "8 Hour" },
      { day: "3 Jun", project: "Analytics Dashboard", work: ["Report Generation"], hour: "8 Hour" },
      { day: "4 Jun", project: "Analytics Dashboard", work: ["Code Review"], hour: "7 Hour" },
      { day: "5 Jun", project: "Analytics Dashboard", work: ["Testing"], hour: "8 Hour" },
      { day: "6 Jun", project: "Analytics Dashboard", work: ["Documentation"], hour: "7 Hour" },
      { day: "7 Jun", project: "Analytics Dashboard", work: ["Deployment"], hour: "8 Hour" }
    ]
  },
  { 
    id: 26, date: "8-13", month: "June", year: "2024", hour: "21",
    week: [
      { day: "8 Jun", project: "CRM System", work: ["API Integration"], hour: "4 Hour" },
      { day: "9 Jun", project: "CRM System", work: ["Testing"], hour: "4 Hour" },
      { day: "10 Jun", project: "CRM System", work: ["Documentation"], hour: "3 Hour" },
      { day: "11 Jun", project: "CRM System", work: ["Bug Fixing"], hour: "3 Hour" },
      { day: "12 Jun", project: "CRM System", work: ["Review"], hour: "3 Hour" },
      { day: "13 Jun", project: "CRM System", work: ["Deployment"], hour: "4 Hour" }
    ]
  },
  { 
    id: 27, date: "14-20", month: "June", year: "2024", hour: "23",
    week: [
      { day: "14 Jun", project: "HR Portal", work: ["Backend Update"], hour: "4 Hour" },
      { day: "15 Jun", project: "HR Portal", work: ["Bug Fixing"], hour: "4 Hour" },
      { day: "16 Jun", project: "HR Portal", work: ["Testing"], hour: "4 Hour" },
      { day: "17 Jun", project: "HR Portal", work: ["Documentation"], hour: "4 Hour" },
      { day: "18 Jun", project: "HR Portal", work: ["Code Review"], hour: "3 Hour" },
      { day: "19 Jun", project: "HR Portal", work: ["API Integration"], hour: "2 Hour" },
      { day: "20 Jun", project: "HR Portal", work: ["Deployment"], hour: "2 Hour" }
    ]
  },
  { 
    id: 28, date: "21-26", month: "June", year: "2024", hour: "43",
    week: [
      { day: "21 Jun", project: "E-commerce Portal", work: ["Frontend Development"], hour: "7 Hour" },
      { day: "22 Jun", project: "E-commerce Portal", work: ["Backend Optimization"], hour: "7 Hour" },
      { day: "23 Jun", project: "E-commerce Portal", work: ["UI Testing"], hour: "7 Hour" },
      { day: "24 Jun", project: "E-commerce Portal", work: ["Documentation"], hour: "7 Hour" },
      { day: "25 Jun", project: "E-commerce Portal", work: ["Bug Fixing"], hour: "7 Hour" },
      { day: "26 Jun", project: "E-commerce Portal", work: ["Deployment"], hour: "8 Hour" }
    ]
  },
  { 
    id: 29, date: "27-30", month: "June", year: "2024", hour: "56",
    week: [
      { day: "27 Jun", project: "Mobile App", work: ["Feature Development"], hour: "14 Hour" },
      { day: "28 Jun", project: "Mobile App", work: ["Bug Fixing"], hour: "14 Hour" },
      { day: "29 Jun", project: "Mobile App", work: ["API Integration"], hour: "14 Hour" },
      { day: "30 Jun", project: "Mobile App", work: ["Testing"], hour: "14 Hour" }
    ]
  },
{ 
  id: 30, date: "1-4", month: "July", year: "2024", hour: "30",
  week: [
    { day: "1 Jul", project: "Website Redesign", work: ["UI Update"], hour: "8 Hour" },
    { day: "2 Jul", project: "Website Redesign", work: ["Bug Fixing"], hour: "7 Hour" },
    { day: "3 Jul", project: "Website Redesign", work: ["Code Review"], hour: "7 Hour" },
    { day: "4 Jul", project: "Website Redesign", work: ["Deployment"], hour: "8 Hour" }
  ]
},
{ 
  id: 31, date: "5-9", month: "July", year: "2024", hour: "63",
  week: [
    { day: "5 Jul", project: "CRM Upgrade", work: ["Feature Development"], hour: "12 Hour" },
    { day: "6 Jul", project: "CRM Upgrade", work: ["API Integration"], hour: "12 Hour" },
    { day: "7 Jul", project: "CRM Upgrade", work: ["Testing"], hour: "12 Hour" },
    { day: "8 Jul", project: "CRM Upgrade", work: ["Bug Fixing"], hour: "13 Hour" },
    { day: "9 Jul", project: "CRM Upgrade", work: ["Documentation"], hour: "14 Hour" }
  ]
},
{ 
  id: 32, date: "10-17", month: "July", year: "2024", hour: "35",
  week: [
    { day: "10 Jul", project: "Analytics Dashboard", work: ["Data Analysis"], hour: "5 Hour" },
    { day: "11 Jul", project: "Analytics Dashboard", work: ["Report Generation"], hour: "5 Hour" },
    { day: "12 Jul", project: "Analytics Dashboard", work: ["Testing"], hour: "5 Hour" },
    { day: "13 Jul", project: "Analytics Dashboard", work: ["Code Review"], hour: "5 Hour" },
    { day: "14 Jul", project: "Analytics Dashboard", work: ["Bug Fixing"], hour: "5 Hour" },
    { day: "15 Jul", project: "Analytics Dashboard", work: ["Documentation"], hour: "5 Hour" },
    { day: "16 Jul", project: "Analytics Dashboard", work: ["Deployment"], hour: "5 Hour" },
    { day: "17 Jul", project: "Analytics Dashboard", work: ["Maintenance"], hour: "0 Hour" }
  ]
},
{ 
  id: 33, date: "18-23", month: "July", year: "2024", hour: "83",
  week: [
    { day: "18 Jul", project: "Mobile App", work: ["Feature Development"], hour: "14 Hour" },
    { day: "19 Jul", project: "Mobile App", work: ["API Integration"], hour: "14 Hour" },
    { day: "20 Jul", project: "Mobile App", work: ["Bug Fixing"], hour: "14 Hour" },
    { day: "21 Jul", project: "Mobile App", work: ["Testing"], hour: "14 Hour" },
    { day: "22 Jul", project: "Mobile App", work: ["Code Review"], hour: "14 Hour" },
    { day: "23 Jul", project: "Mobile App", work: ["Deployment"], hour: "13 Hour" }
  ]
},
{ 
  id: 34, date: "24-31", month: "July", year: "2024", hour: "36",
  week: [
    { day: "24 Jul", project: "Internal Tool", work: ["Backend Development"], hour: "6 Hour" },
    { day: "25 Jul", project: "Internal Tool", work: ["Bug Fixing"], hour: "6 Hour" },
    { day: "26 Jul", project: "Internal Tool", work: ["API Integration"], hour: "6 Hour" },
    { day: "27 Jul", project: "Internal Tool", work: ["UI Testing"], hour: "6 Hour" },
    { day: "28 Jul", project: "Internal Tool", work: ["Documentation"], hour: "6 Hour" },
    { day: "29 Jul", project: "Internal Tool", work: ["Code Review"], hour: "6 Hour" },
    { day: "30 Jul", project: "Internal Tool", work: ["Deployment"], hour: "0 Hour" },
    { day: "31 Jul", project: "Internal Tool", work: ["Maintenance"], hour: "0 Hour" }
  ]
},
{ 
  id: 35, date: "1-8", month: "August", year: "2024", hour: "45",
  week: [
    { day: "1 Aug", project: "Website Redesign", work: ["UI Update"], hour: "6 Hour" },
    { day: "2 Aug", project: "Website Redesign", work: ["Bug Fixing"], hour: "6 Hour" },
    { day: "3 Aug", project: "Website Redesign", work: ["Code Review"], hour: "6 Hour" },
    { day: "4 Aug", project: "Website Redesign", work: ["Deployment"], hour: "6 Hour" },
    { day: "5 Aug", project: "Website Redesign", work: ["Testing"], hour: "6 Hour" },
    { day: "6 Aug", project: "Website Redesign", work: ["Documentation"], hour: "6 Hour" },
    { day: "7 Aug", project: "Website Redesign", work: ["Maintenance"], hour: "3 Hour" },
    { day: "8 Aug", project: "Website Redesign", work: ["Code Refactor"], hour: "6 Hour" }
  ]
},
{ 
  id: 36, date: "9-17", month: "August", year: "2024", hour: "23",
  week: [
    { day: "9 Aug", project: "CRM Upgrade", work: ["Backend Development"], hour: "3 Hour" },
    { day: "10 Aug", project: "CRM Upgrade", work: ["Bug Fixing"], hour: "3 Hour" },
    { day: "11 Aug", project: "CRM Upgrade", work: ["API Integration"], hour: "3 Hour" },
    { day: "12 Aug", project: "CRM Upgrade", work: ["Testing"], hour: "3 Hour" },
    { day: "13 Aug", project: "CRM Upgrade", work: ["Code Review"], hour: "3 Hour" },
    { day: "14 Aug", project: "CRM Upgrade", work: ["Deployment"], hour: "3 Hour" },
    { day: "15 Aug", project: "CRM Upgrade", work: ["Documentation"], hour: "5 Hour" }
  ]
},
{ 
  id: 37, date: "18-24", month: "August", year: "2024", hour: "73",
  week: [
    { day: "18 Aug", project: "Mobile App", work: ["Feature Development"], hour: "12 Hour" },
    { day: "19 Aug", project: "Mobile App", work: ["API Integration"], hour: "12 Hour" },
    { day: "20 Aug", project: "Mobile App", work: ["Bug Fixing"], hour: "12 Hour" },
    { day: "21 Aug", project: "Mobile App", work: ["Testing"], hour: "12 Hour" },
    { day: "22 Aug", project: "Mobile App", work: ["Code Review"], hour: "12 Hour" },
    { day: "23 Aug", project: "Mobile App", work: ["Deployment"], hour: "11 Hour" },
    { day: "24 Aug", project: "Mobile App", work: ["Documentation"], hour: "12 Hour" }
  ]
},
{ 
  id: 38, date: "25-31", month: "August", year: "2024", hour: "43",
  week: [
    { day: "25 Aug", project: "Internal Tool", work: ["Backend Optimization"], hour: "6 Hour" },
    { day: "26 Aug", project: "Internal Tool", work: ["Bug Fixing"], hour: "6 Hour" },
    { day: "27 Aug", project: "Internal Tool", work: ["API Integration"], hour: "6 Hour" },
    { day: "28 Aug", project: "Internal Tool", work: ["UI Testing"], hour: "6 Hour" },
    { day: "29 Aug", project: "Internal Tool", work: ["Documentation"], hour: "6 Hour" },
    { day: "30 Aug", project: "Internal Tool", work: ["Code Review"], hour: "7 Hour" },
    { day: "31 Aug", project: "Internal Tool", work: ["Deployment"], hour: "6 Hour" }
  ]
}
]

module.exports = {users,timesheet};
