# 🚀 Playwright Automation Testing

> **📌 Personal Project for Automation Testing using Playwright & TypeScript**  
> This project showcases my automation testing skills, covering test cases for login of a web application.  
> Implement automation testing for website https://practicetestautomation.com/practice-test-login/ using playwright with typescript.

---

## 🔥 **Why This Project?**

As a **Software Tester**, I built this project to demonstrate my ability to:  
✅ Create automation test scripts using **Playwright + TypeScript**  
✅ Implement **Page Object Model (POM)** for better test structure  
✅ Handle different test scenarios (positive, negative, edge cases)  
✅ Generate test reports & screenshots for debugging

---

## 🛠 **Tech Stack**

- 🎭 [Playwright](https://playwright.dev/) – For browser automation
- 🟦 [TypeScript](https://www.typescriptlang.org/) – For better code maintainability

---

## 📂 **Project Structure**

```
📦 playwright-automation-portfolio
├── 📂 tests             # Contains test cases
│   ├── login.spec.ts    # Login page test scenarios
│   └── ...
├── 📂 pages             # Page Object Model (POM)
│   ├── LoginPage.ts     # Page class for login
│   └── ...
├── 📂 reports           # Test reports & screenshots
├── package.json         # Project dependencies
├── playwright.config.ts # Playwright configuration
└── README.md            # Project documentation
```

---

## 🚀 **How to Run the Tests?**

**1️⃣ Clone the repository**

```bash
git clone https://github.com/miftahnz/practice-automation-testing.git
cd practice-automation-testing
```

**2️⃣ Install dependencies**

```bash
npm install
```

**3️⃣ Run all tests**

```bash
npm start
```

Run tests in headless mode

```bash
npx playwright test
```

**4️ Run tests in headed mode (to see browser UI)**

```bash
npx playwright test --headed
```

**5️⃣ Generate and view test reports**

```bash
npx playwright show-report
```

---

## 🎯 **Test Scenarios Covered**

### ✅ Login Page

✔️ User can log in with valid credentials  
✔️ Error message appears when username is incorrect  
✔️ Error message appears when password is incorrect  
✔️ Password field hides input for security  
✔️ User can view dashboard after login  
✔️ Logout button works correctly

---

## 📊 **Test Report & Screenshots**

This project automatically generates **HTML reports** and **screenshots** for failed test cases.

To view the report:

```bash
npx playwright show-report
```

Screenshots and logs are stored in the `/reports/` directory.

---

## 📢 **Why Should You Check This Project?**

✅ Well-structured automation tests using **Playwright & TypeScript**  
✅ Implemented **Page Object Model (POM)** for better scalability  
✅ Covered **real-world test scenarios**  
✅ Includes **test reports & screenshots** for debugging

---

## 🏆 **What I Learned from This Project?**

- Structuring automation projects using **Page Object Model (POM)**
- Writing maintainable test scripts using **TypeScript**
- Debugging test failures using **logs & screenshots**
- Generating detailed **test reports** for analysis

---

## 💡 **Want to Collaborate or Learn More?**

Feel free to connect with me on **[LinkedIn](www.linkedin.com/in/miftah-nurzanah-19705420b)** or check out my other projects on **[GitHub](https://github.com/miftahnz)**! 🚀

---

### 🔥 **Final Thoughts**

This project is **part of my portfolio** to showcase my automation testing skills. Let me know if you have any feedback or suggestions! 😊

---
