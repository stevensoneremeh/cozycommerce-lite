import { execSync } from "child_process"
import { existsSync } from "fs"
import { join } from "path"

console.log("[v0] Setting up Prisma client...")

try {
  // Generate Prisma client
  console.log("[v0] Running prisma generate...")
  execSync("npx prisma generate", {
    stdio: "inherit",
    cwd: process.cwd(),
  })

  // Check if client was generated successfully
  const clientPath = join(process.cwd(), "node_modules", ".prisma", "client")
  if (existsSync(clientPath)) {
    console.log("[v0] ✅ Prisma client generated successfully!")
  } else {
    console.log("[v0] ⚠️ Prisma client directory not found, but generation completed")
  }
} catch (error) {
  console.error("[v0] ❌ Error generating Prisma client:", error.message)

  // Try alternative approach
  try {
    console.log("[v0] Trying alternative generation method...")
    execSync("npm run postinstall", { stdio: "inherit" })
    console.log("[v0] ✅ Alternative method completed")
  } catch (altError) {
    console.error("[v0] ❌ Alternative method also failed:", altError.message)
  }
}
