import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TreatmentOfWasteExport = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Treatment of waste for export</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            <Accordion
              type="single"
              collapsible
              className="gap-10"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part I</h1>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 p-3">
                  <div>
                    <p className="text-xl font-light">
                      Quantity of waste or refuse destroyed
                    </p>

                    <div className="space-y-2 ">
                      <Label>Description of Goods:</Label>
                      <Textarea placeholder="Description of goods" />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <div className="flex-1 space-y-2">
                        <Label>Quantity with UQC:</Label>
                        <Input placeholder="Quantity with UQC" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <Label>Assessable value:</Label>
                        <Input placeholder="Assessable value" />
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
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part II</h1>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 p-3">
                  <div className="space-y-3">
                    <p className="text-xl font-light ">
                      Duty Paid on waste or refuse
                    </p>
                    <div className="space-y-3">
                      <Label>Description of Goods:</Label>
                      <Textarea placeholder="Description of goods" />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-2">
                        <Label>Quantity with UQC:</Label>
                        <Input placeholder="Quantity with UQC" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <Label>Value:</Label>
                        <Input placeholder="Value" />
                      </div>
                    </div>
                    <div className="space-y-3 border p-2">
                      <p className="text-xl font-extralight">
                        Details of Duty paid
                      </p>
                      <div className="flex gap-3">
                        <div className="flex-1 space-y-3">
                          <Label>Challan No.</Label>
                          <Input placeholder="Challan No." />
                        </div>
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
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part III</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p className="text-xl font-light">
                      Duty to be remitted on the quantity of warehoused goods
                      conatained in so much of the waste or refuse(destroyed or
                      cleared as such)
                    </p>
                    <div className="space-y-3">
                      <Label>Description of Goods:</Label>
                      <Textarea placeholder="Description of goods" />
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-1">
                        <Label>Quantity with UQC:</Label>
                        <Input placeholder="Quantity with UQC" />
                      </div>
                      <div className="flex-1">
                        <Label>Assessable value:</Label>
                        <Input placeholder="Assessable value" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="border p-3 space-y-3">
                        <p className="text-xl font-extralight">Duty involved</p>
                        <div className="flex max-w-3xl gap-3">
                          <div className="flex-1">
                            <Label>BCD</Label>
                            <Input placeholder="BCD" />
                          </div>
                          <div className="flex-1">
                            <Label>IGST</Label>
                            <Input placeholder="IGST" />
                          </div>
                          <div className="flex-1">
                            <Label>Comp.cess</Label>
                            <Input placeholder="Comp.cess" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/*part 2 */}
          </form>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="w-96 ">Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TreatmentOfWasteExport;
