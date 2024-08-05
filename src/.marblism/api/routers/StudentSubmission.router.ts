/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        create: procedure.input($Schema.StudentSubmissionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentSubmission.create(input as any))),

        delete: procedure.input($Schema.StudentSubmissionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentSubmission.delete(input as any))),

        findFirst: procedure.input($Schema.StudentSubmissionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).studentSubmission.findFirst(input as any))),

        findMany: procedure.input($Schema.StudentSubmissionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).studentSubmission.findMany(input as any))),

        findUnique: procedure.input($Schema.StudentSubmissionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).studentSubmission.findUnique(input as any))),

        update: procedure.input($Schema.StudentSubmissionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentSubmission.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.StudentSubmissionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentSubmissionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentSubmissionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentSubmissionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentSubmissionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentSubmissionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentSubmissionGetPayload<T>, Context>) => Promise<Prisma.StudentSubmissionGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.StudentSubmissionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentSubmissionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentSubmissionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentSubmissionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentSubmissionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentSubmissionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentSubmissionGetPayload<T>, Context>) => Promise<Prisma.StudentSubmissionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.StudentSubmissionFindFirstArgs, TData = Prisma.StudentSubmissionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StudentSubmissionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudentSubmissionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentSubmissionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudentSubmissionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudentSubmissionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudentSubmissionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.StudentSubmissionFindManyArgs, TData = Array<Prisma.StudentSubmissionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.StudentSubmissionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.StudentSubmissionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentSubmissionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudentSubmissionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.StudentSubmissionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.StudentSubmissionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.StudentSubmissionFindUniqueArgs, TData = Prisma.StudentSubmissionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StudentSubmissionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudentSubmissionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentSubmissionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudentSubmissionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudentSubmissionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudentSubmissionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.StudentSubmissionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentSubmissionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentSubmissionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentSubmissionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentSubmissionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentSubmissionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentSubmissionGetPayload<T>, Context>) => Promise<Prisma.StudentSubmissionGetPayload<T>>
            };

    };
}
