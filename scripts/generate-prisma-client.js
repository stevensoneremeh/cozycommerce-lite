const { execSync } = require("child_process")

console.log("Generating Prisma client...")

try {
  // Generate the Prisma client
  execSync("npx prisma generate", { stdio: "inherit" })
  console.log("✅ Prisma client generated successfully!")
} catch (error) {
  console.error("❌ Failed to generate Prisma client:", error.message)
  process.exit(1)
}
