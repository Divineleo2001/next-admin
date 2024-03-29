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
import ImportDetails from "../PartAComponents/EditImportDetails";
import { CiViewTable } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import EditImportDetails from "../PartAComponents/EditImportDetails";
import ViewImportDetails from "../PartAComponents/ViewImportDetails";

export default function ImportDetailsDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          {isEdit ? (
            <Button>
              <FaEdit />
            </Button>
          ) : (
            <Button>
              <CiViewTable />
            </Button>
          )}
        </DialogTrigger>
        <DialogContent
          className={
            isEdit
              ? "min-w-[900px] min-h-[400px]"
              : "min-h-[300px] min-w-[700px]"
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-3xl">Import Details </DialogTitle>
              <DialogDescription>
                {isEdit ? (
                  <div>
                    Please provide the import details in the following input
                    sections
                  </div>
                ) : (
                  <div>The import details can be found in the below table</div>
                )}
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-28 left-10">
              {isEdit ? (
                <>
                  <EditImportDetails />
                </>
              ) : (
                <>
                  <ViewImportDetails />
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
