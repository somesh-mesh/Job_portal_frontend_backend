import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Label } from './ui/label'
import { Input } from './ui/input' // Import the Input component
import { Button } from './ui/button'

const UpdateProfileDialog = ({ open, setOpen }) => {

    const [loading,setLoading]= useState(false);
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            Update Profile
                        </DialogTitle>
                    </DialogHeader>
                    <form>
                        <div className='grid gap-6 py-4'>
                            <div className='flex items-center gap-4'>
                                <Label htmlFor="name" className="w-1/4">
                                    Name
                                </Label>
                                <Input id="name" className="flex-1 border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <Label htmlFor="email" className="w-1/4">
                                    Email
                                </Label>
                                <Input id="Email" className="flex-1 border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <Label htmlFor="number" className="w-1/4">
                                    number
                                </Label>
                                <Input id="number" className="flex-1 border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <Label htmlFor="bio" className="w-1/4">
                                    Bio
                                </Label>
                                <Input id="bio" className="flex-1 border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <Label htmlFor="skills" className="w-1/4">
                                    Skills
                                </Label>
                                <Input id="skills" className="flex-1 border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <Label htmlFor="resume" className="w-1/4">
                                    Resume
                                </Label>
                                <Input id="skills" type="file" accept="application/pdf" className="flex-1 border border-gray-300 p-2 rounded-md" />
                            </div>
                        </div>
                        <DialogFooter>
                        {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : <Button type="submit" className="w-full my-4">
              Update
            </Button>
          }

                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog
