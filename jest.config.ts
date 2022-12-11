import dotenv from "dotenv";
import type { Config } from "jest";
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export default async function createConfiguration(): Promise<Config> {
	const isDev = process.env.NODE_ENV === "development";
	const forceCoverage = !!process.env.FORCE_COVERAGE;

	return {
		testEnvironment: "node",
		transform: {
			"^.+\\.(t|j)sx?$": "ts-jest",
		},
		testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$", // testRegex: "(.*.(test|spec)).(jsx?|tsx?|ts?)$",
		moduleFileExtensions: ["ts", "js", "json", "node"],
		verbose: isDev,

		cacheDirectory: `${__dirname}/.jest_cache`,
		roots: ["<rootDir>/src"],
		preset: "ts-jest",
		setupFiles: ["<rootDir>/src/test/preRun.ts"],
		collectCoverage: true,
		collectCoverageFrom: ["**/src/**/*.ts", "!**/node_modules/**", "!**/*.test.data.ts"],
		coverageThreshold: forceCoverage
			? {
					global: {
						branches: 50,
						functions: 70,
						lines: 50,
						statements: 50,
					},
			  }
			: undefined,
		coveragePathIgnorePatterns: [
			".*test\\.data\\.ts$,migrations.*.ts$,(.*.(test|spec)).(jsx?|tsx?)$,(tests/.*.mock).(jsx?|tsx?)$",
		],
		coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
	};
}
