import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ImportedGoodsForHomeConsumption = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Imported goods cleared as such for home consumption
            </h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-1 space-y-3">
                <Label>Bill Entry No:</Label>
                <Input placeholder="Bill Entry No" />
              </div>
              <div className="flex-1 space-y-3 ">
                <Label>Date</Label>
                <Input type="date" />
              </div>
            </div>

            <div>
              <Label>Description of goods</Label>
              <Textarea placeholder="Description of goods" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1 space-y-3">
                <Label>Quality with UQC:</Label>
                <Input placeholder="Quality with UQC" />
              </div>
              <div className="flex-1 space-y-3">
                <Label>Assessable Value:</Label>
                <Input placeholder="Assessable Value" />
              </div>
            </div>
            <div className="border p-3 mt-5">
              <p className="text-xl font-extralight ">Duty invloved:</p>
              <div className="flex gap-3">
                <div className="flex-1 space-y-3">
                  <Label>BCD</Label>
                  <Input placeholder="BCD" />
                </div>
                <div className="flex-1 space-y-3">
                  <Label>GST</Label>
                  <Input placeholder="GST" />
                </div>
                <div className="flex-1 space-y-3">
                  <Label>Comp.cess</Label>
                  <Input placeholder="Comp.cess" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="w-96 ">Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ImportedGoodsForHomeConsumption;
