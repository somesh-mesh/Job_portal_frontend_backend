import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
    // Static list of applied jobs
    const allAppliedJobs = [
        {
            _id: '1',
            createdAt: '2024-09-20T12:00:00Z',
            job: {
                title: 'Senior Flutter Developer',
                company: { name: 'Hoora Technology' }
            },
            status: 'pending'
        },
        {
            _id: '2',
            createdAt: '2024-08-15T12:00:00Z',
            job: {
                title: 'React Developer',
                company: { name: 'Technobase IT Solutions' }
            },
            status: 'accepted'
        },
        {
            _id: '3',
            createdAt: '2024-07-05T12:00:00Z',
            job: {
                title: 'Android Developer',
                company: { name: 'ASIT Solutions' }
            },
            status: 'rejected'
        },
        {
          _id: '1',
          createdAt: '2024-09-20T12:00:00Z',
          job: {
              title: 'Senior Flutter Developer',
              company: { name: 'Microsoft Technology' }
          },
          status: 'pending'
      },
      {
        _id: '1',
        createdAt: '2024-09-20T12:00:00Z',
        job: {
            title: 'Google Flutter Developer',
            company: { name: 'Hoora Technology' }
        },
        status: 'pending'
    },
    ];

    return (
        <div className="p-6">
            <Table className="w-full border border-gray-200">
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="p-3">Date</TableHead>
                        <TableHead className="p-3">Job Role</TableHead>
                        <TableHead className="p-3">Company</TableHead>
                        <TableHead className="p-3 text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? (
                            <span className="block p-4 text-center text-gray-500">You haven't applied any job yet.</span>
                        ) : (
                            allAppliedJobs.map((appliedJob) => (
                                <TableRow key={appliedJob._id} className="hover:bg-gray-50">
                                    <TableCell className="p-3">{appliedJob.createdAt.split("T")[0]}</TableCell>
                                    <TableCell className="p-3">{appliedJob.job.title}</TableCell>
                                    <TableCell className="p-3">{appliedJob.job.company.name}</TableCell>
                                    <TableCell className="p-3 text-right">
                                        <Badge className={`px-2 py-1 rounded-md font-medium ${appliedJob.status === "rejected" ? 'bg-red-400 text-red-900' : appliedJob.status === 'pending' ? 'bg-gray-400 text-gray-900' : 'bg-green-400 text-green-900'}`}>
                                            {appliedJob.status.toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable
