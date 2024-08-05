/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createExamRouter from "./Exam.router";
import createStudentSubmissionRouter from "./StudentSubmission.router";
import createResultRouter from "./Result.router";
import createCompatibilityTestRouter from "./CompatibilityTest.router";
import createFaceRecognitionTestRouter from "./FaceRecognitionTest.router";
import createRagVectorRouter from "./RagVector.router";
import createHomePageRouter from "./HomePage.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as ExamClientType } from "./Exam.router";
import { ClientType as StudentSubmissionClientType } from "./StudentSubmission.router";
import { ClientType as ResultClientType } from "./Result.router";
import { ClientType as CompatibilityTestClientType } from "./CompatibilityTest.router";
import { ClientType as FaceRecognitionTestClientType } from "./FaceRecognitionTest.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as HomePageClientType } from "./HomePage.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        exam: createExamRouter(router, procedure),
        studentSubmission: createStudentSubmissionRouter(router, procedure),
        result: createResultRouter(router, procedure),
        compatibilityTest: createCompatibilityTestRouter(router, procedure),
        faceRecognitionTest: createFaceRecognitionTestRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        homePage: createHomePageRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    exam: ExamClientType<AppRouter>;
    studentSubmission: StudentSubmissionClientType<AppRouter>;
    result: ResultClientType<AppRouter>;
    compatibilityTest: CompatibilityTestClientType<AppRouter>;
    faceRecognitionTest: FaceRecognitionTestClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    homePage: HomePageClientType<AppRouter>;
}
