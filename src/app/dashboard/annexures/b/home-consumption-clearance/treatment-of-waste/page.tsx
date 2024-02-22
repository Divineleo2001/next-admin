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

const TreatmentOfWasteForHomeConsumption = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Treatment of waste for home consumption
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-3">
              <p className="text-xl font-light">
                Duty paid on warehoused goods contained in so much of the waste
                or refuse
              </p>
              <div className="flex gap-3">
                <div className="flex-1 ">
                  <Label>Bill Entry No</Label>
                  <Input placeholder="Bill Entry No" />
                </div>
                <div className="flex-1 ">
                  <Label>Date:</Label>
                  <Input type="date" />
                </div>
              </div>
              <div>
                <Label>Description of Goods:</Label>
                <Textarea placeholder="Description of goods" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 ">
                  <Label>Quantity with UQC:</Label>
                  <Input placeholder="Quantity with UQC" />
                </div>
                <div className="flex-1 ">
                  <Label>Assessable value:</Label>
                  <Input placeholder="Assessable value" />
                </div>
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

            <div>
              <Label>Remarks(if any)</Label>
              <Input className=""/>
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

export default TreatmentOfWasteForHomeConsumption;
