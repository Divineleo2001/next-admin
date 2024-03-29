import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Props } from "@/index";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import {
  ApprovedCompany,
  PendingApprovedCompany,
} from "../../CustomsComponents";

export default function CompanyApprovalDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" className="">
            {isEdit ? "Pending" : "Approved"}
          </Button>
        </DialogTrigger>
        <DialogContent
          className={
            isEdit
              ? "min-w-[1200px] min-h-[700px]"
              : "min-w-[1200px] min-h-[600px]"
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-xl">Company Approval</DialogTitle>
              {isEdit ? (
                <DialogDescription>
                  Please do the necessary Approval checks for the warehouse.
                </DialogDescription>
              ) : (
                <DialogDescription>
                  The Company has been approved.
                </DialogDescription>
              )}
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-20 left-10">
              {isEdit ? (
                <>
                  <PendingApprovedCompany />
                </>
              ) : (
                <>
                  <ApprovedCompany />{" "}
                </>
              )}
            </div>
            <div className="absolute bottom-0 right-0">
              {isEdit ? (
                <Button className="w-96 p-1 mb-10 mr-10">Submit</Button>
              ) : (
                <div className="hidden">
                  <Button className="w-96 p-1 mb-10 mr-10">Submit</Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
