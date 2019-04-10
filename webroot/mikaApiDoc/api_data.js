define({ "api": [
  {
    "type": "POST",
    "url": "/api/Appointments/add",
    "title": "Add Appointment",
    "description": "<p>Add Appointment with Experts</p>",
    "version": "1.0.0",
    "name": "Add_Appointment",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "expert_availability_id",
            "description": "<p>Expert Availability Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "expert_specialization_service_id",
            "description": "<p>Expert Specialization Service Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "expert_specialization_id",
            "description": "<p>Expert Specialization Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"appointment\":\n           {\n               \"user_id\": 13,\n               \"expert_id\": 12,\n               \"expert_availability_id\": 1,\n               \"expert_specialization_service_id\": 1,\n               \"expert_specialization_id\": 1,\n               \"id\": 2\n           },\n           \"success\": true\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/AppointmentTransactions/add",
    "title": "Add Appointment Transactions",
    "description": "<p>Add Appointment Transactions</p>",
    "version": "1.0.0",
    "name": "Add_Appointment_Transactions",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "appointment_id",
            "description": "<p>Appointment Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaction_amount",
            "description": "<p>Transaction Amount for the appointment of expert</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "charge_id",
            "description": "<p>The Stripe ID for the prior charge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Details for the Appointment Transaction</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"appointmentTransaction\":\n           {\n               \"appointment_id\": 1,\n               \"transaction_amount\": 500,\n               \"charge_id\": \"555\",\n               \"status\": true,\n               \"remark\": \"haircut\",\n               \"id\": 1\n           }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/ExpertAvailabilities/add",
    "title": "Add Expert Availabilities",
    "description": "<p>Add Expert Availabilities Details</p>",
    "version": "1.0.0",
    "name": "Add_Expert_Availabilities",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "available_from",
            "description": "<p>Expert Available-from</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "available_to",
            "description": "<p>Expert Available-to</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "overlapping_allowed",
            "description": "<p>Expert is avaialble for some other user in this time-slot</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"expertAvailabilities\":\n           {\n               \"available_from\":\n               {\n                   \"date\": \"2017-10-11 07:00:00.000000\",\n                   \"timezone_type\": 3,\n                   \"timezone\": \"UTC\"\n               },\n               \"available_to\":\n               {\n                   \"date\": \"2017-10-11 08:00:00.000000\",\n                   \"timezone_type\": 3,\n                   \"timezone\": \"UTC\"\n               },\n               \"overlapping_allowed\": true,\n               \"expert_id\": 12,\n               \"status\": true,\n               \"created\": \"2017-10-10T07:27:35+00:00\",\n               \"modified\": \"2017-10-10T07:27:35+00:00\",\n               \"id\": 3\n           },\n           \"success\": true\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/ExpertSpecializations/add",
    "title": "Add Expert Specializations",
    "description": "<p>Add Expert Specializations</p>",
    "version": "1.0.0",
    "name": "Add_Expert_Specializations",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "specialization_id",
            "description": "<p>Specialization Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n {\n           \"expertSpecialization\":\n           {\n               \"specialization_id\": 2,\n               \"expert_id\": 1,\n               \"created\": \"2017-10-13T08:15:42+00:00\",\n               \"modified\": \"2017-10-13T08:15:42+00:00\",\n               \"id\": 3\n           },\n           \"success\": true\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/userSalons/add",
    "title": "Add User's Salon",
    "description": "<p>Add Expert's Salon Details</p>",
    "version": "1.0.0",
    "name": "Add_User_s_Salon",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salon_name",
            "description": "<p>Name of the Salon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the Salon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Zipcode of that area</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n          \"userSalon\": {\n            \"salon_name\": \"Weirdo\",\n            \"location\": \"LA\",\n            \"zipcode\": \"90115\",\n            \"user_id\": 13,\n            \"status\": true,\n            \"created\": \"2017-10-06T12:45:58+00:00\",\n            \"modified\": \"2017-10-06T12:45:58+00:00\",\n            \"id\": 2\n          },\n          \"success\": true\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "DELETE",
    "url": "/api/ExpertSpecializations/delete/1",
    "title": "Delete Expert Specializations",
    "description": "<p>Delete Expert Specializations</p>",
    "version": "1.0.0",
    "name": "Delete_Expert_Specializations",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "specialization_id",
            "description": "<p>Specialization Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"success\": true\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "DELETE",
    "url": "/api/ExpertSpecializationServices/delete/1",
    "title": "Delete Expert Specializations Services",
    "description": "<p>Delete Expert Specializations Services</p>",
    "version": "1.0.0",
    "name": "Delete_Expert_Specializations_Services",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "specialization_id",
            "description": "<p>Specialization Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"success\": true\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/ExpertAvailabilities/edit/1",
    "title": "Edit Expert Availabilities",
    "description": "<p>Edit Expert Availabilities Details</p>",
    "version": "1.0.0",
    "name": "Edit_Expert_Availabilities",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "available_from",
            "description": "<p>Expert Available-from</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "available_to",
            "description": "<p>Expert Available-to</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "overlapping_allowed",
            "description": "<p>Expert is avaialble for some other user in this time-slot</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n   \"expertAvailabilities\":\n       {\n               \"id\": 3,\n               \"expert_id\": 12,\n               \"available_from\":\n               {\n                   \"date\": \"2017-10-11 09:00:00.000000\",\n                   \"timezone_type\": 3,\n                   \"timezone\": \"UTC\"\n               },\n               \"available_to\":\n               {\n                   \"date\": \"2017-10-11 10:00:00.000000\",\n                   \"timezone_type\": 3,\n                   \"timezone\": \"UTC\"\n               },\n               \"overlapping_allowed\": false,\n               \"status\": true,\n               \"created\": \"2017-10-10T07:27:35+00:00\",\n               \"modified\": \"2017-10-10T07:32:17+00:00\"\n           },\n           \"success\": true\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/userSalons/edit/1",
    "title": "Edit User's Salon",
    "description": "<p>Edit Expert's Salon Details</p>",
    "version": "1.0.0",
    "name": "Edit_User_s_Salon",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salon_name",
            "description": "<p>Name of the Salon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the Salon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Zipcode of that area</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n          \"userSalon\": {\n            \"id\": 1,\n            \"user_id\": 13,\n            \"salon_name\": \"Stylist\",\n            \"location\": \"New York\",\n            \"status\": true,\n            \"is_deleted\": null,\n            \"created\": \"2017-10-03T12:46:22+00:00\",\n            \"modified\": \"2017-10-06T12:52:45+00:00\",\n            \"zipcode\": \"92010\"\n          }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "GET",
    "url": "/api/ExpertAvailabilities/index",
    "title": "Expert Availabilities Index",
    "description": "<p>Expert Availabilities Index Details</p>",
    "version": "1.0.0",
    "name": "Expert_Availabilities_Index",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n   \"expertAvailabilities\":\n   \n        [\n           {\n               \"id\": 1,\n               \"expert_id\": 1,\n               \"available_from\": \"2017-10-06T01:25:28+00:00\",\n               \"available_to\": \"2017-10-06T02:05:28+00:00\",\n               \"overlapping_allowed\": true,\n               \"status\": true,\n               \"created\": \"2017-10-06T07:58:27+00:00\",\n               \"modified\": \"2017-10-06T07:58:27+00:00\",\n               \"expert\":\n               {\n                   \"id\": 1,\n                   \"user_id\": 2,\n                   \"user_salon_id\": null\n               }\n           },\n           {\n               \"id\": 2,\n               \"expert_id\": 12,\n               \"available_from\": \"2017-10-07T01:25:28+00:00\",\n               \"available_to\": \"2017-10-07T02:05:28+00:00\",\n               \"overlapping_allowed\": false,\n               \"status\": true,\n               \"created\": \"2017-10-06T08:26:21+00:00\",\n               \"modified\": \"2017-10-06T08:31:41+00:00\",\n               \"expert\":\n               {\n                   \"id\": 12,\n                   \"user_id\": 13,\n                   \"user_salon_id\": 8\n               }\n           },\n           {\n               \"id\": 3,\n               \"expert_id\": 12,\n               \"available_from\": \"2017-10-11T09:00:00+00:00\",\n               \"available_to\": \"2017-10-11T10:00:00+00:00\",\n               \"overlapping_allowed\": false,\n               \"status\": true,\n               \"created\": \"2017-10-10T07:27:35+00:00\",\n               \"modified\": \"2017-10-10T07:32:17+00:00\",\n               \"expert\":\n               {\n                   \"id\": 12,\n                   \"user_id\": 13,\n                   \"user_salon_id\": 8\n               }\n           }\n       ]\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/Users/linkUserWithFb",
    "title": "Link User with Facebook",
    "description": "<p>Link User with Facebook Details</p>",
    "version": "1.0.0",
    "name": "Link_User_with_Facebook",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Facebook Identifier</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"updateUser\":\n           {\n               \"user_id\": 13,\n               \"fb_identifier\": \"45678\",\n               \"status\": true,\n               \"created\": \"2017-10-11T07:22:27+00:00\",\n               \"modified\": \"2017-10-11T07:22:27+00:00\",\n               \"id\": 6\n           },\n           \"success\": true\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "GET",
    "url": "/api/UserSalons/searchSalon",
    "title": "Search User Salon",
    "description": "<p>Search User Salon Details</p>",
    "version": "1.0.0",
    "name": "Search_User_Salon",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"getSearchSalons\":\n           [\n               {\n                   \"id\": 1,\n                   \"user_id\": 2,\n                   \"salon_name\": \"Stylist\",\n                   \"location\": \"New York\",\n                   \"status\": true,\n                   \"is_deleted\": null,\n                   \"created\": \"2017-10-03T12:46:22+00:00\",\n                   \"modified\": \"2017-10-06T12:52:45+00:00\",\n                   \"zipcode\": \"92010\",\n                   \"user\":\n                   {\n                       \"id\": 2,\n                       \"first_name\": \"kshitiz\",\n                       \"last_name\": \"Sekhri\",\n                       \"email\": \"kshitizsekhri@gmail.com\",\n                       \"phone\": \"9876543234\",\n                       \"role_id\": 3,\n                       \"is_deleted\": null,\n                       \"created\": \"2017-10-03T08:45:28+00:00\",\n                       \"modified\": \"2017-10-03T08:45:28+00:00\",\n                       \"username\": \"kshitizsekhri@gmail.com\",\n                       \"experts\":\n                       [\n                           {\n                               \"id\": 1,\n                               \"user_id\": 2,\n                               \"user_salon_id\": null,\n                               \"expert_availabilities\":\n                               [\n                                   {\n                                       \"id\": 1,\n                                       \"expert_id\": 1,\n                                       \"available_from\": \"2017-10-11T10:25:28+00:00\",\n                                       \"available_to\": \"2017-10-11T16:25:28+00:00\",\n                                       \"overlapping_allowed\": true,\n                                       \"status\": true,\n                                       \"created\": \"2017-10-06T07:58:27+00:00\",\n                                       \"modified\": \"2017-10-06T07:58:27+00:00\"\n                                   }\n                               ]\n                           }\n                       ]\n                   },\n                   \"_matchingData\":\n                   {\n                       \"Users\":\n                       {\n                           \"id\": 2,\n                           \"first_name\": \"kshitiz\",\n                           \"last_name\": \"Sekhri\",\n                           \"email\": \"kshitizsekhri@gmail.com\",\n                           \"phone\": \"9876543234\",\n                           \"role_id\": 3,\n                           \"is_deleted\": null,\n                           \"created\": \"2017-10-03T08:45:28+00:00\",\n                           \"modified\": \"2017-10-03T08:45:28+00:00\",\n                           \"username\": \"kshitizsekhri@gmail.com\"\n                       },\n                       \"Experts\":\n                       {\n                           \"id\": 1,\n                           \"user_id\": 2,\n                           \"user_salon_id\": null\n                       },\n                       \"ExpertAvailabilities\":\n                       {\n                           \"id\": 1,\n                           \"expert_id\": 1,\n                           \"available_from\": \"2017-10-11T10:25:28+00:00\",\n                           \"available_to\": \"2017-10-11T16:25:28+00:00\",\n                           \"overlapping_allowed\": true,\n                           \"status\": true,\n                           \"created\": \"2017-10-06T07:58:27+00:00\",\n                           \"modified\": \"2017-10-06T07:58:27+00:00\"\n                       }\n                   }\n               },\n               {\n                   \"id\": 3,\n                   \"user_id\": 13,\n                   \"salon_name\": \"Stylist\",\n                   \"location\": \"New York\",\n                   \"status\": true,\n                   \"is_deleted\": null,\n                   \"created\": \"2017-10-06T14:25:53+00:00\",\n                   \"modified\": \"2017-10-06T14:25:53+00:00\",\n                   \"zipcode\": \"92010\",\n                   \"user\":\n                   {\n                       \"id\": 13,\n                       \"first_name\": \"kshitiz\",\n                       \"last_name\": \"sekhri\",\n                       \"email\": \"kshitizsekhri12@gmail.com\",\n                       \"phone\": \"12345678\",\n                       \"role_id\": 3,\n                       \"is_deleted\": null,\n                       \"created\": \"2017-10-04T13:38:16+00:00\",\n                       \"modified\": \"2017-10-04T13:38:16+00:00\",\n                       \"username\": \"kshitizsekhri12@gmail.com\",\n                       \"experts\":\n                       [\n                           {\n                               \"id\": 12,\n                               \"user_id\": 13,\n                               \"user_salon_id\": 8,\n                               \"expert_availabilities\":\n                               [\n                                   {\n                                       \"id\": 3,\n                                       \"expert_id\": 12,\n                                       \"available_from\": \"2017-10-11T12:25:28+00:00\",\n                                       \"available_to\": \"2017-10-11T15:25:28+00:00\",\n                                       \"overlapping_allowed\": true,\n                                       \"status\": true,\n                                       \"created\": \"2017-10-10T07:27:35+00:00\",\n                                       \"modified\": \"2017-10-10T13:21:35+00:00\"\n                                   }\n                               ]\n                           }\n                       ]\n                   },\n                   \"_matchingData\":\n                   {\n                       \"Users\":\n                       {\n                           \"id\": 13,\n                           \"first_name\": \"kshitiz\",\n                           \"last_name\": \"sekhri\",\n                           \"email\": \"kshitizsekhri12@gmail.com\",\n                           \"phone\": \"12345678\",\n                           \"role_id\": 3,\n                           \"is_deleted\": null,\n                           \"created\": \"2017-10-04T13:38:16+00:00\",\n                           \"modified\": \"2017-10-04T13:38:16+00:00\",\n                           \"username\": \"kshitizsekhri12@gmail.com\"\n                       },\n                       \"Experts\":\n                       {\n                           \"id\": 12,\n                           \"user_id\": 13,\n                           \"user_salon_id\": 8\n                       },\n                       \"ExpertAvailabilities\":\n                       {\n                           \"id\": 3,\n                           \"expert_id\": 12,\n                           \"available_from\": \"2017-10-11T12:25:28+00:00\",\n                           \"available_to\": \"2017-10-11T15:25:28+00:00\",\n                           \"overlapping_allowed\": true,\n                           \"status\": true,\n                           \"created\": \"2017-10-10T07:27:35+00:00\",\n                           \"modified\": \"2017-10-10T13:21:35+00:00\"\n                       }\n                   }\n               }\n           ]\n        }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "POST",
    "url": "/api/users/socialLogin",
    "title": "Social Login",
    "description": "<p>Social Login</p>",
    "version": "1.0.0",
    "name": "Social_Login",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"uid\": \"555\",\n      \"displayName\":\"Kshitiz Sekhri\",\n      \"email\":\"kshitizsekhri@gmail.com\",\n      \"password\":\"123456789\",\n      \"role_id\":3,\n      \"username\" :\"kshitizsekhri@gmail.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Facebook identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displayName",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "role_id",
            "description": "<p>User's Role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n    \"status\": true,\n    \"data\":\n      {\n            \"expertSpecializations\": [],\n            \"id\": {\n              \"id\": 13,\n              \"first_name\": \"kshitiz\",\n              \"last_name\": \"sekhri\",\n              \"email\": \"kshitizsekhri12@gmail.com\",\n              \"phone\": \"12345678\",\n              \"role_id\": 3,\n              \"is_deleted\": null,\n              \"created\": \"2017-10-04T13:38:16+00:00\",\n              \"modified\": \"2017-10-04T13:38:16+00:00\",\n              \"username\": \"kshitizsekhri12@gmail.com\",\n              \"experts\": [\n                {\n                  \"id\": 12,\n                  \"user_id\": 13,\n                  \"user_salon_id\": null,\n                  \"expert_specializations\": []\n                }\n              ]\n            },\n            \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTI0MTQsImV4cGVydF9pZCI6MTJ9.zuqe8cw_2Eqha_7VJz0xbach3y-f_1CotYLW5_MONbc\",\n            \"expires\": \"2018-01-30 06:06:54\"\n          }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "GET",
    "url": "/api/Appointments/view/1",
    "title": "View Appointment Index",
    "description": "<p>View Appointment Details</p>",
    "version": "1.0.0",
    "name": "View_Appointment_Index",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"appointment\":\n           {\n               \"id\": 1,\n               \"user_id\": 13,\n               \"expert_id\": 12,\n               \"expert_availability_id\": 1,\n               \"expert_specialization_service_id\": 1,\n               \"expert_specialization_id\": 1,\n               \"is_confirmed\": null,\n               \"is_completed\": null,\n               \"appointment_transactions\":\n               [\n               ],\n               \"expert_specialization\":\n               {\n                   \"id\": 1,\n                   \"expert_id\": 1,\n                   \"specialization_id\": 1,\n                   \"description\": \"qwerty\",\n                   \"created\": \"2017-10-11T00:00:00+00:00\",\n                   \"modified\": \"2017-10-11T00:00:00+00:00\"\n               },\n               \"expert_specialization_service\":\n               {\n                   \"id\": 1,\n                   \"expert_id\": 1,\n                   \"expert_specialization_id\": 1,\n                   \"specialization_service_id\": 1,\n                   \"price\": \"10\",\n                   \"description\": \"qwerty\",\n                   \"created\": \"2017-10-11T00:00:00+00:00\",\n                   \"modified\": \"2017-10-11T00:00:00+00:00\",\n                   \"duration\": 2\n               },\n               \"expert_availability\":\n               {\n                   \"id\": 1,\n                   \"expert_id\": 1,\n                   \"available_from\": \"2017-10-11T10:25:28+00:00\",\n                   \"available_to\": \"2017-10-11T16:25:28+00:00\",\n                   \"overlapping_allowed\": true,\n                   \"status\": true,\n                   \"created\": \"2017-10-06T07:58:27+00:00\",\n                   \"modified\": \"2017-10-06T07:58:27+00:00\"\n               },\n               \"expert\":\n               {\n                   \"id\": 12,\n                   \"user_id\": 13,\n                   \"user_salon_id\": 8\n               },\n               \"user\":\n               {\n                   \"id\": 13,\n                   \"first_name\": \"kshitiz\",\n                   \"last_name\": \"sekhri\",\n                   \"email\": \"kshitizsekhri12@gmail.com\",\n                   \"phone\": \"12345678\",\n                   \"role_id\": 3,\n                   \"is_deleted\": null,\n                   \"created\": \"2017-10-04T13:38:16+00:00\",\n                   \"modified\": \"2017-10-04T13:38:16+00:00\",\n                   \"username\": \"kshitizsekhri12@gmail.com\"\n               }\n           }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "GET",
    "url": "/api/AppointmentTransactions/view/1",
    "title": "View Appointment Transaction",
    "description": "<p>View Appointment Transaction Details</p>",
    "version": "1.0.0",
    "name": "View_Appointment_Transaction",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n           \"appointmentTransaction\":\n           {\n               \"id\": 1,\n               \"appointment_id\": 1,\n               \"transaction_amount\": 500,\n               \"charge_id\": \"555\",\n               \"status\": true,\n               \"remark\": \"haircut\",\n               \"appointment\":\n               {\n                   \"id\": 1,\n                   \"user_id\": 13,\n                   \"expert_id\": 12,\n                   \"expert_availability_id\": 1,\n                   \"expert_specialization_service_id\": 1,\n                   \"expert_specialization_id\": 1,\n                   \"is_confirmed\": null,\n                   \"is_completed\": null\n               }\n           }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "type": "GET",
    "url": "/api/ExpertAvailabilities/view/1",
    "title": "View Expert Availabilities",
    "description": "<p>View Expert Availabilities Details</p>",
    "version": "1.0.0",
    "name": "View_Expert_Availabilities",
    "group": "Mika_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Type",
            "description": "<p>This is the content types that are acceptable for the response.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>This is the MIME type of the body of the request (used with POST and PUT requests)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Accept\"=> \"application/json\"\n\"Content-Type\"=> \"application/json\" \n\"Authorization \"=> \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE1MTcyOTAwMDUsImV4cGVydF9pZCI6MTJ9.Cw-f3dKt0uUVljCkO7-si_2pRCQDzmj3D5rz2NHXB1E\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>response of the Api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n   \"expertAvailabilities\":\n   \n       {\n           \"id\": 3,\n           \"expert_id\": 12,\n           \"available_from\": \"2017-10-11T09:00:00+00:00\",\n           \"available_to\": \"2017-10-11T10:00:00+00:00\",\n           \"overlapping_allowed\": false,\n           \"status\": true,\n           \"created\": \"2017-10-10T07:27:35+00:00\",\n           \"modified\": \"2017-10-10T07:32:17+00:00\",\n           \"expert\":\n           {\n               \"id\": 12,\n               \"user_id\": 13,\n               \"user_salon_id\": 8\n           }\n       }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "webroot/mikaApiDoc/mika.js",
    "groupTitle": "Mika_API"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "webroot/mikaApiDoc/main.js",
    "group": "_home_twinspark_public_html_dev_mika_webroot_mikaApiDoc_main_js",
    "groupTitle": "_home_twinspark_public_html_dev_mika_webroot_mikaApiDoc_main_js",
    "name": ""
  }
] });
