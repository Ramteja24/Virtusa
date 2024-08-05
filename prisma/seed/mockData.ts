import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('3526f4bb-8a5d-4f51-a514-ec3b045b36fb', '1Karley31@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_J0H0t5Yz8Q1z1c', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('3a7fd71d-e342-4c24-b7ba-24d59adaaf07', '13Helena86@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=15', 'cus_J0H0t5Yz8Q1z1b', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('1ea91a43-1f69-401f-a2b9-017bf0f889a4', '19Broderick.Ferry70@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=21', 'cus_J0H0t5Yz8Q1z1b', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('ae40e079-5738-44b2-8ddb-90411ff80b1b', '25Trycia_Lehner@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'cus_J0H0t5Yz8Q1z1c', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('af00a121-5c80-4b2c-8a1f-6205e4bcd612', '31Caesar.Marks@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=33', 'cus_J0H0t5Yz8Q1z1a', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('008779d3-f262-447c-a0ac-e87c7c0b5669', '37Maggie49@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=39', 'cus_J0H0t5Yz8Q1z1a', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('af5e1d40-56bc-40bc-b02d-3ffe5e54827e', '43Ivory_Mante92@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_J0H0t5Yz8Q1z1b', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('161ba54b-005c-41a7-8b13-3bddf771612d', '49Santos_Graham@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=51', 'cus_J0H0t5Yz8Q1z1e', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('7c1d8db4-b6da-45a4-a8ed-46fe89149744', '55Elsie93@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=57', 'cus_J0H0t5Yz8Q1z1b', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "vectorId") VALUES ('fb42cf9e-3136-434d-ba36-ad2f11658984', 'vec54321');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('28c3cf17-3f1e-4e7a-9b4a-29d5f1a1f826', 'vec12345');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('30c9c9f5-569b-461d-a391-49075730b131', 'vec67890');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('913a9a69-105d-43b4-af7c-54d01e8d63f4', 'vec67890');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('47f76899-4053-4097-8d69-ba71ee24a53d', 'vec11223');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('55577047-378c-4c7d-bf21-db05ec0c9777', 'vec54321');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('0ded1489-f0ae-4a4d-b407-1d1f232803d6', 'vec09876');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('273dd9db-e936-438b-b26b-2784b9fe7060', 'vec67890');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('1eea7fa8-3fee-4596-bc39-f10b3f06d03f', 'vec67890');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('ec0bf2b7-7054-42a7-80a9-c555b464e9ac', 'vec11223');

INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('265f96ac-0454-46ca-9d57-e07ad8b283dc', 'Database Management Quiz', 'A comprehensive test on advanced algorithms and their applications.', 'Aptitude', '1ea91a43-1f69-401f-a2b9-017bf0f889a4');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('c6bd9c22-03b8-4225-98a7-3c1a7f023011', 'Data Structures Midterm', 'Final exam focusing on operating systems concepts and architecture.', 'Coding', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('a2278327-e449-4e23-ba9d-8c250861232d', 'Software Engineering Assessment', 'Midterm exam covering various data structures and their implementations.', 'Coding', 'af5e1d40-56bc-40bc-b02d-3ffe5e54827e');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('36dc1fbf-7dfb-493a-9472-82f61c11b70c', 'Data Structures Midterm', 'Midterm exam covering various data structures and their implementations.', 'Coding', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('685b5aa4-466f-4b58-aff1-fe4791fdafd3', 'Database Management Quiz', 'Final exam focusing on operating systems concepts and architecture.', 'Multiple Choice', 'af00a121-5c80-4b2c-8a1f-6205e4bcd612');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('e65598db-a711-46d2-be2a-adcd032a0715', 'Operating Systems Final', 'A comprehensive test on advanced algorithms and their applications.', 'Multiple Choice', '3a7fd71d-e342-4c24-b7ba-24d59adaaf07');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('2997e537-bb46-4382-9b99-9437ace8c1ab', 'Software Engineering Assessment', 'Assessment on software engineering principles and practices.', 'Multiple Choice', '008779d3-f262-447c-a0ac-e87c7c0b5669');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('c3f0772b-fa94-454a-ae28-7472191e60a6', 'Software Engineering Assessment', 'Final exam focusing on operating systems concepts and architecture.', 'Theory', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('0d472e93-468b-455b-ad67-8978db622a34', 'Software Engineering Assessment', 'Final exam focusing on operating systems concepts and architecture.', 'Aptitude', '7c1d8db4-b6da-45a4-a8ed-46fe89149744');
INSERT INTO "Exam" ("id", "title", "description", "type", "createdById") VALUES ('583c2dde-6816-4dda-98e3-7d519507409e', 'Operating Systems Final', 'Midterm exam covering various data structures and their implementations.', 'Theory', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('f670bd94-0ddb-4676-a6ff-5869e4519338', 'include iostreamusing namespace stdint main     cout  Hello World    return 0', '2024-07-02T14:23:45.435Z', '7c1d8db4-b6da-45a4-a8ed-46fe89149744', '583c2dde-6816-4dda-98e3-7d519507409e');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('b58b940e-6fa4-4a7b-ba1a-6edc8c79dc33', 'function greetname     return Hello name', '2024-06-26T04:50:25.940Z', 'ae40e079-5738-44b2-8ddb-90411ff80b1b', 'e65598db-a711-46d2-be2a-adcd032a0715');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('496f5589-d1f2-42fe-b96f-280d6a77565d', 'def adda b    return a  b', '2024-08-10T06:48:56.405Z', '3a7fd71d-e342-4c24-b7ba-24d59adaaf07', '265f96ac-0454-46ca-9d57-e07ad8b283dc');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('061c5478-06e3-48b8-9c73-dd6be75222d9', 'SELECT  FROM students WHERE score  75', '2023-12-26T11:27:15.551Z', 'ae40e079-5738-44b2-8ddb-90411ff80b1b', 'c6bd9c22-03b8-4225-98a7-3c1a7f023011');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('e6f66f33-a17a-4ae1-ba61-ce345c6ac67c', 'public class Main     public static void mainString args         System.out.printlnHello World    ', '2025-01-25T06:32:52.318Z', '008779d3-f262-447c-a0ac-e87c7c0b5669', 'e65598db-a711-46d2-be2a-adcd032a0715');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('088b6469-0dc0-4399-b6f5-e11d6d62c71a', 'include iostreamusing namespace stdint main     cout  Hello World    return 0', '2024-03-29T19:26:41.151Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c6bd9c22-03b8-4225-98a7-3c1a7f023011');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('882b4973-a66c-4289-8b30-328e7a71e3cc', 'SELECT  FROM students WHERE score  75', '2024-03-26T08:44:12.463Z', '3a7fd71d-e342-4c24-b7ba-24d59adaaf07', '36dc1fbf-7dfb-493a-9472-82f61c11b70c');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('c21a349f-2d8c-4b4d-a98d-5eed5622f180', 'include iostreamusing namespace stdint main     cout  Hello World    return 0', '2025-03-31T20:28:51.698Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '36dc1fbf-7dfb-493a-9472-82f61c11b70c');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('61e39226-d535-47be-be0b-637ea9c285c3', 'function greetname     return Hello name', '2023-09-19T12:00:20.017Z', 'af5e1d40-56bc-40bc-b02d-3ffe5e54827e', 'e65598db-a711-46d2-be2a-adcd032a0715');
INSERT INTO "StudentSubmission" ("id", "submissionData", "submissionTime", "studentId", "examId") VALUES ('478985c6-c4cd-4b6a-aaaa-28eebea71951', 'function greetname     return Hello name', '2025-03-23T22:42:13.266Z', 'ae40e079-5738-44b2-8ddb-90411ff80b1b', 'c3f0772b-fa94-454a-ae28-7472191e60a6');

INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('d224a11e-8fd0-4e8c-827a-4d0f8f0651f8', '92', 'Needs improvement', 'af5e1d40-56bc-40bc-b02d-3ffe5e54827e', '2997e537-bb46-4382-9b99-9437ace8c1ab');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('4b2cc404-ed0c-4f31-b608-1a3a4ed1ccc8', '85', 'Excellent performance', '7c1d8db4-b6da-45a4-a8ed-46fe89149744', 'c6bd9c22-03b8-4225-98a7-3c1a7f023011');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('a5383a5f-c7f5-4c53-9b71-387512ca7a3f', '95', 'Needs improvement', 'af00a121-5c80-4b2c-8a1f-6205e4bcd612', '685b5aa4-466f-4b58-aff1-fe4791fdafd3');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('96c9e7f1-9fcc-4277-83a2-d43c98e27f93', '76', 'Excellent performance', '3a7fd71d-e342-4c24-b7ba-24d59adaaf07', 'c3f0772b-fa94-454a-ae28-7472191e60a6');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('2588d389-a489-47c5-9974-c5148133088f', '92', 'Good job keep it up', '1ea91a43-1f69-401f-a2b9-017bf0f889a4', 'c6bd9c22-03b8-4225-98a7-3c1a7f023011');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('52f4bd3a-8b83-4a05-8e12-439cf8d05724', '95', 'Needs improvement', '161ba54b-005c-41a7-8b13-3bddf771612d', 'a2278327-e449-4e23-ba9d-8c250861232d');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('7847d311-59fe-4048-8879-11a21e5247c1', '95', 'Well done', 'af5e1d40-56bc-40bc-b02d-3ffe5e54827e', '2997e537-bb46-4382-9b99-9437ace8c1ab');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('d8a7f816-ff77-4263-b245-22963bf245a9', '95', 'Well done', '3526f4bb-8a5d-4f51-a514-ec3b045b36fb', 'e65598db-a711-46d2-be2a-adcd032a0715');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('3bbceae2-55f8-41dd-b1b2-a21b01d427e2', '88', 'Outstanding effort', 'af5e1d40-56bc-40bc-b02d-3ffe5e54827e', '583c2dde-6816-4dda-98e3-7d519507409e');
INSERT INTO "Result" ("id", "score", "feedback", "studentId", "examId") VALUES ('80ead2f3-eba3-471b-b964-a81bdd7834cb', '88', 'Excellent performance', '008779d3-f262-447c-a0ac-e87c7c0b5669', '685b5aa4-466f-4b58-aff1-fe4791fdafd3');

INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('b87a6704-06b6-45bd-876b-cac5d324cfd5', 'Pass', '2024-12-23T23:10:08.761Z', '161ba54b-005c-41a7-8b13-3bddf771612d');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('478734f9-bd1d-48ea-9ba0-3e234b014952', 'Fail', '2024-09-06T03:39:46.198Z', '3a7fd71d-e342-4c24-b7ba-24d59adaaf07');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('e303493a-a815-4db7-914a-8b6af0f5b089', 'Fail', '2024-08-12T11:57:14.447Z', '7c1d8db4-b6da-45a4-a8ed-46fe89149744');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('c4210262-bef7-4e2d-af41-f879b06d2fd4', 'Fail', '2023-08-31T10:57:42.838Z', '1ea91a43-1f69-401f-a2b9-017bf0f889a4');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('13143684-0019-4375-a136-566723f5be6b', 'Fail', '2025-01-04T17:49:29.891Z', 'af5e1d40-56bc-40bc-b02d-3ffe5e54827e');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('7db46928-621b-49d1-8fde-4dd92b49153c', 'Fail', '2024-06-08T10:55:19.630Z', '161ba54b-005c-41a7-8b13-3bddf771612d');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('f631b8c9-88fa-4915-9ba5-28cb6809200d', 'Pass', '2025-03-23T09:30:24.094Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('129ab918-64c4-4475-9747-41d1cce0dc58', 'Pass', '2023-10-16T18:03:16.740Z', '008779d3-f262-447c-a0ac-e87c7c0b5669');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('272102e9-bbac-4fcb-8dc7-142b4fb1184a', 'Fail', '2025-02-09T08:00:20.161Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "CompatibilityTest" ("id", "testResult", "testTime", "studentId") VALUES ('5505dc64-c562-4321-97e4-e49e8e17f8a4', 'Fail', '2024-08-16T14:39:47.386Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('5e9cd301-5849-473c-807e-dc51a9989e24', 'Fail', '2025-03-10T12:47:00.484Z', '3a7fd71d-e342-4c24-b7ba-24d59adaaf07');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('a3a2673c-2ce4-4e9d-88f1-3c9db6a18946', 'Fail', '2024-02-16T10:52:15.985Z', 'ae40e079-5738-44b2-8ddb-90411ff80b1b');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('544625ea-d470-433b-939b-acfff8138df1', 'Pass', '2024-09-07T13:25:08.308Z', 'af5e1d40-56bc-40bc-b02d-3ffe5e54827e');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('fa34143f-0989-4c96-9f50-fa273d0770e0', 'Fail', '2025-05-13T12:22:36.997Z', '7c1d8db4-b6da-45a4-a8ed-46fe89149744');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('250b3e3a-c5e3-448c-b8ae-6fddf63b0020', 'Pass', '2024-05-04T12:21:48.545Z', '008779d3-f262-447c-a0ac-e87c7c0b5669');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('6537723d-d2bc-4dd5-afad-83fcc336bbf5', 'Fail', '2023-12-29T03:35:38.400Z', '161ba54b-005c-41a7-8b13-3bddf771612d');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('e609e1c9-878d-4157-8219-8a089a0356f6', 'Pass', '2024-11-03T02:03:22.052Z', 'ae40e079-5738-44b2-8ddb-90411ff80b1b');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('8a84af1b-067f-41a0-938a-1589de7ca2b3', 'Pass', '2023-10-16T10:33:09.885Z', '1ea91a43-1f69-401f-a2b9-017bf0f889a4');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('6bfa2d70-0926-4f84-b282-f3b81b1ce02c', 'Fail', '2023-12-26T21:37:53.369Z', '7c1d8db4-b6da-45a4-a8ed-46fe89149744');
INSERT INTO "FaceRecognitionTest" ("id", "testResult", "testTime", "studentId") VALUES ('ab2eab1e-18dc-4d39-b697-27a66f87ba6b', 'Fail', '2023-12-26T13:47:19.836Z', 'af00a121-5c80-4b2c-8a1f-6205e4bcd612');

INSERT INTO "HomePage" ("id", "title", "content") VALUES ('582e3943-839a-4479-a998-bb9fa0521d00', 'Ace Your Exams', 'Join thousands of students who trust our platform for their exam preparations.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('5398d49d-6eed-40ef-bf25-a8f5eab9945f', 'Your Next Exam Awaits', 'Take the first step towards your academic success with our userfriendly exam portal.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('77ed8fc7-37aa-4710-9edf-5fd3b31cad9a', 'Prepare for Success', 'Our platform offers a seamless exam experience with advanced face recognition technology.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('7532c152-240b-43e2-8b78-8c025776c56d', 'Your Next Exam Awaits', 'Experience a secure and reliable online exam environment.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('d368c446-6ed4-4687-a3ef-800e65c58df7', 'Prepare for Success', 'Get ready to test your skills with our comprehensive coding and aptitude exams.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('1a24b6f2-e2f7-40d2-bdb7-0205a170f382', 'Prepare for Success', 'Our platform offers a seamless exam experience with advanced face recognition technology.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('03023567-f81e-4f57-82d3-3ace7579bb26', 'Prepare for Success', 'Take the first step towards your academic success with our userfriendly exam portal.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('40913af3-634b-4e80-95fc-2fd9686eca43', 'Start Your Test Journey', 'Take the first step towards your academic success with our userfriendly exam portal.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('923db836-aa1c-4a70-8c49-2af524833891', 'Start Your Test Journey', 'Join thousands of students who trust our platform for their exam preparations.');
INSERT INTO "HomePage" ("id", "title", "content") VALUES ('ef1d0204-d0de-4bf9-9a97-6ac058725f0b', 'Ace Your Exams', 'Experience a secure and reliable online exam environment.');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
