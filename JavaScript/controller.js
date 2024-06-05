const elementCardsContainer = document.querySelector(
  ".proffesional-card-container"
);

const proffesionalsArray = [
  {
    id: 1,
    specialization: ["plumber"],
    name: "David",
    phoneNumber: "32456789",
    yearsOfExperience: 15,
    serviceArea: ["northern-district", "Golan heights"],
    rating: {
      totalStars: 4,
      usersWhoRated: 1,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 2,
    specialization: ["electrician"],
    name: "John",
    phoneNumber: "12345678",
    yearsOfExperience: 10,
    serviceArea: ["Tel-Aviv district", "Jerusalem-district"],
    rating: {
      totalStars: 7,
      usersWhoRated: 2,
    },
    reviews: [
      {
        reviewerName: "Sarah",
        reviewRating: 4,
        reviewText: "Good service",
        reviewDate: "2021-10-10",
      },
      {
        reviewerName: "Mike",
        reviewRating: 3,
        reviewText: "Average work",
        reviewDate: "2021-10-12",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 3,
    specialization: ["painter"],
    name: "Alice",
    phoneNumber: "23456789",
    yearsOfExperience: 7,
    serviceArea: ["Southern-district", "Tel-Aviv district"],
    rating: {
      totalStars: 9,
      usersWhoRated: 3,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Good painting",
        reviewDate: "2021-09-20",
      },
      {
        reviewerName: "Emma",
        reviewRating: 2,
        reviewText: "Could be better",
        reviewDate: "2021-09-22",
      },
      {
        reviewerName: "John",
        reviewRating: 3,
        reviewText: "Not bad",
        reviewDate: "2021-09-23",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 4,
    specialization: ["gardener"],
    name: "Chris",
    phoneNumber: "34567890",
    yearsOfExperience: 12,
    serviceArea: ["Jerusalem-district", "Southern-district"],
    rating: {
      totalStars: 12,
      usersWhoRated: 3,
    },
    reviews: [
      {
        reviewerName: "Anna",
        reviewRating: 4,
        reviewText: "Excellent work",
        reviewDate: "2021-08-15",
      },
      {
        reviewerName: "Jack",
        reviewRating: 5,
        reviewText: "Very professional",
        reviewDate: "2021-08-16",
      },
      {
        reviewerName: "Emma",
        reviewRating: 3,
        reviewText: "Good job",
        reviewDate: "2021-08-17",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 5,
    specialization: ["locksmith"],
    name: "Eve",
    phoneNumber: "45678901",
    yearsOfExperience: 5,
    serviceArea: ["Tel-Aviv district", "Golan heights"],
    rating: {
      totalStars: 8,
      usersWhoRated: 2,
    },
    reviews: [
      {
        reviewerName: "Mike",
        reviewRating: 5,
        reviewText: "Fast and reliable",
        reviewDate: "2021-07-14",
      },
      {
        reviewerName: "Sarah",
        reviewRating: 3,
        reviewText: "Good service",
        reviewDate: "2021-07-15",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 6,
    specialization: ["handyman"],
    name: "Frank",
    phoneNumber: "56789012",
    yearsOfExperience: 8,
    serviceArea: ["northern-district", "Jerusalem-district"],
    rating: {
      totalStars: 10,
      usersWhoRated: 3,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 3,
        reviewText: "Decent job",
        reviewDate: "2021-06-11",
      },
      {
        reviewerName: "Anna",
        reviewRating: 4,
        reviewText: "Good work",
        reviewDate: "2021-06-12",
      },
      {
        reviewerName: "Jack",
        reviewRating: 3,
        reviewText: "Average service",
        reviewDate: "2021-06-13",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 7,
    specialization: ["painter"],
    name: "Grace",
    phoneNumber: "67890123",
    yearsOfExperience: 9,
    serviceArea: ["Southern-district", "Tel-Aviv district"],
    rating: {
      totalStars: 11,
      usersWhoRated: 2,
    },
    reviews: [
      {
        reviewerName: "Mike",
        reviewRating: 6,
        reviewText: "Excellent job",
        reviewDate: "2021-05-20",
      },
      {
        reviewerName: "Sarah",
        reviewRating: 5,
        reviewText: "Good painting",
        reviewDate: "2021-05-21",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 8,
    specialization: ["electrician"],
    name: "Hank",
    phoneNumber: "78901234",
    yearsOfExperience: 14,
    serviceArea: ["Jerusalem-district", "northern-district"],
    rating: {
      totalStars: 16,
      usersWhoRated: 3,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 6,
        reviewText: "Excellent work",
        reviewDate: "2021-04-10",
      },
      {
        reviewerName: "Emma",
        reviewRating: 5,
        reviewText: "Good electrician",
        reviewDate: "2021-04-12",
      },
      {
        reviewerName: "John",
        reviewRating: 5,
        reviewText: "Professional",
        reviewDate: "2021-04-13",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 9,
    specialization: ["gardener"],
    name: "Ivy",
    phoneNumber: "89012345",
    yearsOfExperience: 6,
    serviceArea: ["Golan heights", "northern-district"],
    rating: {
      totalStars: 9,
      usersWhoRated: 3,
    },
    reviews: [
      {
        reviewerName: "Anna",
        reviewRating: 4,
        reviewText: "Nice work",
        reviewDate: "2021-03-20",
      },
      {
        reviewerName: "Jack",
        reviewRating: 3,
        reviewText: "Good job",
        reviewDate: "2021-03-22",
      },
      {
        reviewerName: "Emma",
        reviewRating: 2,
        reviewText: "Could be better",
        reviewDate: "2021-03-23",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
  {
    id: 10,
    specialization: ["locksmith"],
    name: "Jake",
    phoneNumber: "90123456",
    yearsOfExperience: 11,
    serviceArea: ["Tel-Aviv district", "Southern-district"],
    rating: {
      totalStars: 12,
      usersWhoRated: 4,
    },
    reviews: [
      {
        reviewerName: "Mike",
        reviewRating: 4,
        reviewText: "Fast and reliable",
        reviewDate: "2021-02-15",
      },
      {
        reviewerName: "Sarah",
        reviewRating: 3,
        reviewText: "Good service",
        reviewDate: "2021-02-16",
      },
      {
        reviewerName: "Tom",
        reviewRating: 2,
        reviewText: "Average",
        reviewDate: "2021-02-17",
      },
      {
        reviewerName: "Emma",
        reviewRating: 3,
        reviewText: "Satisfactory",
        reviewDate: "2021-02-18",
      },
    ],
    availability: {
      sunday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      monday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      tuesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      wednesday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      thursday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      friday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
      saturday: [
        { hour: "9", available: "true" },
        { hour: "10", available: "true" },
        { hour: "11", available: "true" },
        { hour: "12", available: "true" },
        { hour: "13", available: "true" },
        { hour: "14", available: "true" },
        { hour: "15", available: "true" },
      ],
    },
  },
];

// async function proffesionalsGet() {
//   const proffesionals = await axios.get(baseURL);
//   proffesionalsArray = proffesionals.data;
// }

// proffesionalsGet();

function renderProffesionalsCards(array) {
  elementCardsContainer.innerHTML = "";
  for (const obj of array) {
    const card = `
    <a href = "http://127.0.0.1:5500/HTML/proffesionalDetails.html?id=${obj.id}">
    <div class = "proffesional-card" >
    <img src="" alt=""></img>
    <p>${obj.name}</p>
    <p>${obj.specialization}</p>
    <p>${obj.serviceArea}</p>
    <p>${obj.rating.totalStars} stars </p>
    </div>
    </a>
      `;

    elementCardsContainer.innerHTML += card;
  }
}

renderProffesionalsCards(proffesionalsArray);

function updateUrlByFilter(ev) {
  ev.preventDefault();
  console.log("hiiii");
  const specializationSelectValue =
    document.querySelector(".specialization").value;
  const ratingSelectValue = document.querySelector(".rating").value;
  const areaSelectValue = document.querySelector(".area").value;

  const params = new URLSearchParams(window.location.search);
  params.set("specialization", specializationSelectValue);
  params.set("servicearea", areaSelectValue);
  params.set("rating", ratingSelectValue);

  window.location.search = params;
}
// console.log(URL(window.location.search))

document.addEventListener("DOMContentLoaded", function () {
  renderAppointmentList();
});

async function renderAppointmentList() {
  const appointmentList = document.querySelector(".appointments");
  const [appointments, professionals] = await Promise.all([
    fetchAppointments(),
    fetchProfessionals(),
  ]);

  // Clear the existing appointments if any
  appointmentList.innerHTML = "";

  if (appointments.length === 0) {
    const noAppointments = document.createElement("li");
    noAppointments.textContent = "No appointments found.";
    appointmentList.appendChild(noAppointments);
    return;
  }

  appointments.forEach((appointment) => {
    const professional = professionals.find(
      (pro) => pro.id === appointment.professionalId
    );

    const appointmentItem = document.createElement("li");
    appointmentItem.classList.add("appointment-item");

    const appointmentDetails = `
        <div class="appointment-info">
          <p><strong>Appointment ID:</strong> ${appointment.id}</p>
          <p><strong>Date:</strong> ${appointment.date}</p>
          <p><strong>Time:</strong> ${appointment.time}</p>
          <p><strong>Professional ID:</strong> ${appointment.professionalId}</p>
          <p><strong>Professional Name:</strong> ${
            professional ? professional.name : "N/A"
          }</p>
        </div>
      `;

    appointmentItem.innerHTML = appointmentDetails;
    appointmentList.appendChild(appointmentItem);
  });
}
