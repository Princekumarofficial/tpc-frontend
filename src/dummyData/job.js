export const Jobs = [
  {
    "id": "1",
    "seasonId": "123",
    "recruiterId": "456",
    "companyId": "789",
    "role": "Software Engineer",
    "active": true,
    "currentStatus": "Open",
    "companyDetailsFilled": {
      "name": "ABC Company",
      "size": 100,
      "address": {
        "city": "New York",
        "line1": "123 Main St",
        "line2": "",
        "state": "NY",
        "country": "USA",
        "zipCode": "10001"
      },
      "domains": ["Technology", "Software"],
      "category": "IT",
      "yearOfEstablishment": "2000"
    },
    "recruiterDetailsFilled": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "contact": "+1234567890",
      "landline": null,
      "designation": "HR Manager"
    },
    "selectionProcedure": {
      "tests": [{"type": "Technical", "duration": 60}],
      "interviews": [{"type": "Technical", "duration": 30}],
      "requirements": {},
      "selectionMode": "Online",
      "groupDiscussion": false,
      "shortlistFromResume": true
    },
    "attachment": "example.pdf",
    "skills": "JavaScript, React, Node.js",
    "location": "New York",
    "noOfVacancies": 5,
    "offerLetterReleaseDate": "2024-06-01",
    "joiningDate": "2024-07-01",
    "duration": 12,
    "season": {"id": "123", "year": "2024", "type": "Summer"},
    "company": {"id": "789", "name": "ABC Company"},
    "recruiter": {"id": "456", "userId": "789", "companyId": "123", "designation": "HR Manager", "landline": null},
    "salaries": [
      {
        "id": "1",
        "jobId": "1",
        "salaryPeriod": "Monthly",
        "others": null,
        "criteria": {"minCPI": 7.5, "genders": ["Male"], "programs": ["Computer Science"], "categories": ["General"], "tenthMarks": 85, "twelthMarks": 90, "facultyApprovals": ["Approved"]},
        "baseSalary": 5000,
        "totalCTC": 60000,
        "takeHomeSalary": 4500,
        "grossSalary": 5500,
        "otherCompensations": 500
      }
    ],
    "jobCoordinators": [
      {
        "id": "1",
        "tpcMemberId": "1",
        "role": "Coordinator",
        "tpcMember": {
          "id": "1",
          "department": "Computer Science",
          "userId": "123",
          "role": "Professor",
          "user": {"id": "123", "email": "prof@example.com", "name": "Dr. Smith", "contact": "+9876543210"}
        }
      }
    ]
  },
  {
    "id": "2",
    "seasonId": "456",
    "recruiterId": "789",
    "companyId": "123",
    "role": "Data Scientist",
    "active": true,
    "currentStatus": "Open",
    "companyDetailsFilled": {
      "name": "XYZ Corporation",
      "size": 200,
      "address": {
        "city": "San Francisco",
        "line1": "456 Elm St",
        "line2": "",
        "state": "CA",
        "country": "USA",
        "zipCode": "94103"
      },
      "domains": ["Data Science", "Machine Learning"],
      "category": "Technology",
      "yearOfEstablishment": "2010"
    },
    "recruiterDetailsFilled": {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "contact": "+9876543210",
      "landline": null,
      "designation": "HR Manager"
    },
    "selectionProcedure": {
      "tests": [{"type": "Technical", "duration": 60}],
      "interviews": [{"type": "Technical", "duration": 30}],
      "requirements": {},
      "selectionMode": "Online",
      "groupDiscussion": false,
      "shortlistFromResume": true
    },
    "attachment": "example.pdf",
    "skills": "Python, TensorFlow, SQL",
    "location": "San Francisco",
    "noOfVacancies": 3,
    "offerLetterReleaseDate": "2024-07-01",
    "joiningDate": "2024-08-01",
    "duration": 12,
    "season": {"id": "456", "year": "2024", "type": "Summer"},
    "company": {"id": "123", "name": "XYZ Corporation"},
    "recruiter": {"id": "789", "userId": "456", "companyId": "789", "designation": "HR Manager", "landline": null},
    "salaries": [
      {
        "id": "2",
        "jobId": "2",
        "salaryPeriod": "Monthly",
        "others": null,
        "criteria": {"minCPI": 8, "genders": ["Female"], "programs": ["Statistics"], "categories": ["General"], "tenthMarks": 90, "twelthMarks": 95, "facultyApprovals": ["Approved"]},
        "baseSalary": 6000,
        "totalCTC": 72000,
        "takeHomeSalary": 5000,
        "grossSalary": 6000,
        "otherCompensations": 1000
      }
    ],
    "jobCoordinators": [
      {
        "id": "2",
        "tpcMemberId": "2",
        "role": "Coordinator",
        "tpcMember": {
          "id": "2",
          "department": "Data Science",
          "userId": "456",
          "role": "Professor",
          "user": {"id": "456", "email": "prof@example.com", "name": "Dr. Johnson", "contact": "+1234567890"}
        }
      }
    ]
  },
  {
    "id": "3",
    "seasonId": "789",
    "recruiterId": "123",
    "companyId": "456",
    "role": "Product Manager",
    "active": true,
    "currentStatus": "Open",
    "companyDetailsFilled": {
      "name": "PQR Enterprises",
      "size": 150,
      "address": {
        "city": "Seattle",
        "line1": "789 Oak St",
        "line2": "",
        "state": "WA",
        "country": "USA",
        "zipCode": "98101"
      },
      "domains": ["Product Management", "Business"],
      "category": "Business",
      "yearOfEstablishment": "2015"
    },
    "recruiterDetailsFilled": {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "contact": "+1234567890",
      "landline": null,
      "designation": "HR Manager"
    },
    "selectionProcedure": {
      "tests": [{"type": "Technical", "duration": 60}],
      "interviews": [{"type": "Technical", "duration": 30}],
      "requirements": {},
      "selectionMode": "Online",
      "groupDiscussion": false,
      "shortlistFromResume": true
    },
    "attachment": "example.pdf",
    "skills": "Product Management, Marketing",
    "location": "Seattle",
    "noOfVacancies": 2,
    "offerLetterReleaseDate": "2024-08-01",
    "joiningDate": "2024-09-01",
    "duration": 12,
    "season": {"id": "789", "year": "2024", "type": "Summer"},
    "company": {"id": "456", "name": "PQR Enterprises"},
    "recruiter": {"id": "123", "userId": "123", "companyId": "456", "designation": "HR Manager", "landline": null},
    "salaries": [
      {
        "id": "3",
        "jobId": "3",
        "salaryPeriod": "Monthly",
        "others": null,
        "criteria": {"minCPI": 8, "genders": ["Male", "Female"], "programs": ["Business Administration"], "categories": ["General"], "tenthMarks": 90, "twelthMarks": 95, "facultyApprovals": ["Approved"]},
        "baseSalary": 7000,
        "totalCTC": 84000,
        "takeHomeSalary": 6000,
        "grossSalary": 7000,
        "otherCompensations": 1000
      }
    ],
    "jobCoordinators": [
      {
        "id": "3",
        "tpcMemberId": "3",
        "role": "Coordinator",
        "tpcMember": {
          "id": "3",
          "department": "Business",
          "userId": "789",
          "role": "Professor",
          "user": {"id": "789", "email": "prof@example.com", "name": "Dr. Williams", "contact": "+9876543210"}
        }
      }
    ]
  },
  {
    "id": "4",
    "seasonId": "123",
    "recruiterId": "456",
    "companyId": "789",
    "role": "Marketing Specialist",
    "active": true,
    "currentStatus": "Open",
    "companyDetailsFilled": {
      "name": "MNO Group",
      "size": 75,
      "address": {
        "city": "Chicago",
        "line1": "456 Oak St",
        "line2": "",
        "state": "IL",
        "country": "USA",
        "zipCode": "60601"
      },
      "domains": ["Marketing", "Advertising"],
      "category": "Marketing",
      "yearOfEstablishment": "2012"
    },
    "recruiterDetailsFilled": {
      "name": "Emma Brown",
      "email": "emma.brown@example.com",
      "contact": "+1234567890",
      "landline": null,
      "designation": "HR Manager"
    },
    "selectionProcedure": {
      "tests": [{"type": "Technical", "duration": 60}],
      "interviews": [{"type": "Technical", "duration": 30}],
      "requirements": {},
      "selectionMode": "Online",
      "groupDiscussion": false,
      "shortlistFromResume": true
    },
    "attachment": "example.pdf",
    "skills": "Marketing, Social Media",
    "location": "Chicago",
    "noOfVacancies": 4,
    "offerLetterReleaseDate": "2024-09-01",
    "joiningDate": "2024-10-01",
    "duration": 12,
    "season": {"id": "123", "year": "2024", "type": "Summer"},
    "company": {"id": "789", "name": "MNO Group"},
    "recruiter": {"id": "456", "userId": "789", "companyId": "123", "designation": "HR Manager", "landline": null},
    "salaries": [
      {
        "id": "4",
        "jobId": "4",
        "salaryPeriod": "Monthly",
        "others": null,
        "criteria": {"minCPI": 7, "genders": ["Male", "Female"], "programs": ["Marketing"], "categories": ["General"], "tenthMarks": 80, "twelthMarks": 85, "facultyApprovals": ["Approved"]},
        "baseSalary": 5500,
        "totalCTC": 66000,
        "takeHomeSalary": 5000,
        "grossSalary": 5500,
        "otherCompensations": 500
      }
    ],
    "jobCoordinators": [
      {
        "id": "4",
        "tpcMemberId": "4",
        "role": "Coordinator",
        "tpcMember": {
          "id": "4",
          "department": "Marketing",
          "userId": "123",
          "role": "Professor",
          "user": {"id": "123", "email": "prof@example.com", "name": "Dr. Martinez", "contact": "+9876543210"}
        }
      }
    ]
  },
  {
    "id": "5",
    "seasonId": "456",
    "recruiterId": "789",
    "companyId": "123",
    "role": "Financial Analyst",
    "active": true,
    "currentStatus": "Open",
    "companyDetailsFilled": {
      "name": "DEF Financials",
      "size": 150,
      "address": {
        "city": "Los Angeles",
        "line1": "789 Maple St",
        "line2": "",
        "state": "CA",
        "country": "USA",
        "zipCode": "90001"
      },
      "domains": ["Finance", "Investments"],
      "category": "Finance",
      "yearOfEstablishment": "2010"
    },
    "recruiterDetailsFilled": {
      "name": "Mark Johnson",
      "email": "mark.johnson@example.com",
      "contact": "+1234567890",
      "landline": null,
      "designation": "HR Manager"
    },
    "selectionProcedure": {
      "tests": [{"type": "Technical", "duration": 60}],
      "interviews": [{"type": "Technical", "duration": 30}],
      "requirements": {},
      "selectionMode": "Online",
      "groupDiscussion": false,
      "shortlistFromResume": true
    },
    "attachment": "example.pdf",
    "skills": "Financial Analysis, Accounting",
    "location": "Los Angeles",
    "noOfVacancies": 3,
    "offerLetterReleaseDate": "2024-07-01",
    "joiningDate": "2024-08-01",
    "duration": 12,
    "season": {"id": "456", "year": "2024", "type": "Summer"},
    "company": {"id": "123", "name": "DEF Financials"},
    "recruiter": {"id": "789", "userId": "456", "companyId": "789", "designation": "HR Manager", "landline": null},
    "salaries": [
      {
        "id": "5",
        "jobId": "5",
        "salaryPeriod": "Monthly",
        "others": null,
        "criteria": {"minCPI": 8, "genders": ["Male", "Female"], "programs": ["Finance"], "categories": ["General"], "tenthMarks": 85, "twelthMarks": 90, "facultyApprovals": ["Approved"]},
        "baseSalary": 6000,
        "totalCTC": 72000,
        "takeHomeSalary": 5000,
        "grossSalary": 6000,
        "otherCompensations": 1000
      }
    ],
    "jobCoordinators": [
      {
        "id": "5",
        "tpcMemberId": "5",
        "role": "Coordinator",
        "tpcMember": {
          "id": "5",
          "department": "Finance",
          "userId": "789",
          "role": "Professor",
          "user": {"id": "789", "email": "prof@example.com", "name": "Dr. Lee", "contact": "+9876543210"}
        }
      }
    ]
  }
]

